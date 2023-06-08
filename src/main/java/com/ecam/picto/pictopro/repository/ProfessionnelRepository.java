package com.ecam.picto.pictopro.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecam.picto.pictopro.entity.Professionnel;

@Repository
public interface ProfessionnelRepository extends JpaRepository<Professionnel, Integer> {
	Professionnel findByUsername(String username);

	Professionnel findById(int id);

}
