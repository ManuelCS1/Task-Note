package com.notes.backend.repositories;

import com.notes.backend.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface INoteRepository extends JpaRepository<Note, Integer> {

    @Query("select n from Note n where n.isarchived = ?1")
    List<Note> findByArchived(boolean archived);


    @Query("select n from Note n join n.categories c where n.isarchived = false and c.title like %:categoryTitle%")
    List<Note> findActiveNotesByCategory(@Param("categoryTitle") String categoryTitle);

    @Query("select n from Note n join n.categories c where n.isarchived = true and c.title like %:categoryTitle%")
    List<Note> findArchivedNotesByCategory(@Param("categoryTitle") String categoryTitle);

}
