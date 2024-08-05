package com.notes.backend.services;

import com.notes.backend.entities.Note;

import java.util.List;

public interface INoteServices {
    public void insert(Note note);
    List<Note> list();
    public void delete(int id_note);
    public Note listId(int id_note);

    List<Note> listActive();
    List<Note> listArchived();
    void archive(int id_note);
    void unarchive(int id_note);

    public List<Note> getActiveNotesByCategory(String category);
    public List<Note> getArchivedNotesByCategory(String category);
}
