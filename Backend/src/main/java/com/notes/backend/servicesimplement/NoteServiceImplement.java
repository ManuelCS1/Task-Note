package com.notes.backend.servicesimplement;
import com.notes.backend.entities.Note;
import com.notes.backend.repositories.INoteRepository;
import com.notes.backend.services.INoteServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NoteServiceImplement implements INoteServices {
    @Autowired
    private INoteRepository nR;
    @Override
    public void insert(Note note) {
        nR.save(note);
    }

    @Override
    public List<Note> list() {
        return nR.findAll();
    }

    @Override
    public void delete(int id_note) {
        nR.deleteById(id_note);
    }

    @Override
    public Note listId(int id_note) {
        return nR.findById(id_note).orElse(new Note());
    }

    ///////////////////////////////////////////////////////////////////////
    @Override
    public List<Note> listActive() {
        return nR.findByArchived(false);
    }

    @Override
    public List<Note> listArchived() {
        return nR.findByArchived(true);
    }

    @Override
    public void archive(int id_note) {
        Note note = nR.findById(id_note).orElse(null);
        if (note != null) {
            note.setIsarchived(true);
            nR.save(note);
        }
    }

    @Override
    public void unarchive(int id_note) {

        Note note = nR.findById(id_note).orElse(null);
        if (note != null) {
            note.setIsarchived(false);
            nR.save(note);
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////
    @Override
    public List<Note> getActiveNotesByCategory(String category) {
        return nR.findActiveNotesByCategory(category);
    }

    @Override
    public List<Note> getArchivedNotesByCategory(String category) {
        return nR.findArchivedNotesByCategory(category);
    }
}
