package com.notes.backend.entities;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "note")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_note;

    @Column(name = "title" , nullable = false)
    private String title;

    @Column(name = "content",  columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(name = "createddate")
    private LocalDate createddate;

    @Column(name = "lastmodifieddate")
    private LocalDate lastmodifieddate;

    @Column(name = "isarchived")
    private Boolean isarchived;

    @ManyToMany
    @JoinTable(
            name = "note_category",
            joinColumns = @JoinColumn(name = "id_note"),
            inverseJoinColumns = @JoinColumn(name = "id_category")
    )
    private Set<Category> categories = new HashSet<>();


    public Note() {
    }

    public Note(int id_note, String title, String content, LocalDate createddate, LocalDate lastmodifieddate, Boolean isarchived, Set<Category> categories) {
        this.id_note = id_note;
        this.title = title;
        this.content = content;
        this.createddate = createddate;
        this.lastmodifieddate = lastmodifieddate;
        this.isarchived = isarchived;
        this.categories = categories;
    }

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
