package com.ecam.picto.pictopro.service;

import com.ecam.picto.pictopro.entity.Professionnel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProfessionnelService {

	void save(Professionnel professionnel);

	List<Professionnel> findAll();

	Professionnel findById(int id);

	Professionnel findByUsername (String username);

	void deleteUserByUsername(String username);

	void deleteCompteById (int id);
}
