package com.notes.backend.dtos;

import com.notes.backend.entities.Category;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

public class NoteDTO {
    private int id_note;
    private String title;
    private String content;
    private LocalDate createddate;
    private LocalDate lastmodifieddate;
    private Boolean isarchived;
    private Set<Category> categories = new HashSet<>();


    public int getId_note() {
        return id_note;
    }

    public void setId_note(int id_note) {
        this.id_note = id_note;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getCreateddate() {
        return createddate;
    }

    public void setCreateddate(LocalDate createddate) {
        this.createddate = createddate;
    }

    public LocalDate getLastmodifieddate() {
        return lastmodifieddate;
    }

    public void setLastmodifieddate(LocalDate lastmodifieddate) {
        this.lastmodifieddate = lastmodifieddate;
    }

    public Boolean getIsarchived() {
        return isarchived;
    }

    public void setIsarchived(Boolean isarchived) {
        this.isarchived = isarchived;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }
}
