package com.notes.backend.services;

import com.notes.backend.entities.Category;

import java.util.List;

public interface ICategoryServices {

    public void insert(Category category);
    List<Category> list();
    public void delete(int id_category);
    public Category listId(int id_category);
}
