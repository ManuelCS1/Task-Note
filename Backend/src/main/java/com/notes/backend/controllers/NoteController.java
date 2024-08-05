package com.notes.backend.controllers;

import com.notes.backend.dtos.NoteDTO;
import com.notes.backend.entities.Note;
import com.notes.backend.services.INoteServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/notes")
public class NoteController {

    @Autowired
    private INoteServices nS;

    @PostMapping
    public void insert(@RequestBody NoteDTO dto){
        ModelMapper m=new ModelMapper();
        Note n= m.map(dto,Note.class);
        nS.insert(n);
    }

    @GetMapping
    public List<NoteDTO> list() {
        return nS.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, NoteDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id")Integer id){nS.delete(id);}

    @GetMapping("/{id}")
    public NoteDTO listId(@PathVariable("id")Integer id){
        ModelMapper m=new ModelMapper();
        NoteDTO dto=m.map(nS.listId(id),NoteDTO.class);
        return dto;
    }
    @PutMapping
    public void update(@RequestBody NoteDTO dto) {
        ModelMapper m = new ModelMapper();
        Note n = m.map(dto, Note.class);
        nS.insert(n);
    }

    @GetMapping("/active")
    public List<NoteDTO> listActive() {
        return nS.listActive().stream()
                .map(x -> new ModelMapper().map(x, NoteDTO.class))
                .collect(Collectors.toList());
    }

    @GetMapping("/archived")
    public List<NoteDTO> listArchived() {
        return nS.listArchived().stream()
                .map(x -> new ModelMapper().map(x, NoteDTO.class))
                .collect(Collectors.toList());
    }
    @PatchMapping("/{id}/archive")
    public void archive(@PathVariable("id") int id) {
        nS.archive(id);
    }

    @PatchMapping("/{id}/unarchive")
    public void unarchive(@PathVariable("id") int id) {
        nS.unarchive(id);
    }

    /////////////////////////////////////////////////////////////////////////////////
    @GetMapping("/filter/active")
    public ResponseEntity<List<Note>> getActiveNotesByCategoryTitle(@RequestParam String categoryTitle) {
        List<Note> notes = nS.getActiveNotesByCategory(categoryTitle);
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }

    @GetMapping("/filter/archived")
    public ResponseEntity<List<Note>> getArchivedNotesByCategoryTitle(@RequestParam String categoryTitle) {
        List<Note> notes = nS.getArchivedNotesByCategory(categoryTitle);
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }
}
