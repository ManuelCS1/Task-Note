package com.notes.backend.servicesimplement;

import com.notes.backend.entities.Category;
import com.notes.backend.repositories.ICategoryRepository;
import com.notes.backend.services.ICategoryServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImplement implements ICategoryServices {
    @Autowired
    private ICategoryRepository cR;

    @Override
    public void insert(Category category) {
        cR.save(category);
    }

    @Override
    public List<Category> list() {
        return cR.findAll();
    }

    @Override
    public void delete(int id_category) {
        cR.deleteById(id_category);
    }

    @Override
    public Category listId(int id_category) {
        return cR.findById(id_category).orElse(new Category());
    }
}
