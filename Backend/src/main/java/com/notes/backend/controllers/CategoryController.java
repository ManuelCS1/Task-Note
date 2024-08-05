package com.notes.backend.controllers;
import com.notes.backend.dtos.CategoryDTO;
import com.notes.backend.entities.Category;
import com.notes.backend.services.ICategoryServices;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private ICategoryServices cS;

    @PostMapping
    public void insert(@RequestBody CategoryDTO dto){
        ModelMapper m=new ModelMapper();
        Category c= m.map(dto,Category.class);
        cS.insert(c);
    }

    @GetMapping
    public List<CategoryDTO> list() {
        return cS.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, CategoryDTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id")Integer id){cS.delete(id);}

    @GetMapping("/{id}")
    public CategoryDTO listId(@PathVariable("id")Integer id){
        ModelMapper m=new ModelMapper();
        CategoryDTO dto=m.map(cS.listId(id),CategoryDTO.class);
        return dto;
    }
    @PutMapping
    public void update(@RequestBody CategoryDTO dto) {
        ModelMapper m = new ModelMapper();
        Category c = m.map(dto, Category.class);
        cS.insert(c);
    }


}
