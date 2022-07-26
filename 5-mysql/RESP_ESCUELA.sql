-- MySQL Script generated by MySQL Workbench
-- Mon Sep  5 13:23:40 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema escuela
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `escuela` ;

-- -----------------------------------------------------
-- Schema escuela
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `escuela` ;
USE `escuela` ;

-- -----------------------------------------------------
-- Table `escuela`.`PROFESOR`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`PROFESOR` ;

CREATE TABLE IF NOT EXISTS `escuela`.`PROFESOR` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`ALUMNO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`ALUMNO` ;

CREATE TABLE IF NOT EXISTS `escuela`.`ALUMNO` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido` VARCHAR(45) NULL,
  `Curso` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`MATERIA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`MATERIA` ;

CREATE TABLE IF NOT EXISTS `escuela`.`MATERIA` (
  `cod_Mat` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Version` VARCHAR(45) NOT NULL,
  `Grado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cod_Mat`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`MATERIA_has_PROFESOR`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`MATERIA_has_PROFESOR` ;

CREATE TABLE IF NOT EXISTS `escuela`.`MATERIA_has_PROFESOR` (
  `MATERIA_cod_Mat` INT NOT NULL,
  `PROFESOR_id` INT NOT NULL,
  PRIMARY KEY (`MATERIA_cod_Mat`, `PROFESOR_id`),
  INDEX `fk_MATERIA_has_PROFESOR_PROFESOR1_idx` (`PROFESOR_id` ASC) VISIBLE,
  INDEX `fk_MATERIA_has_PROFESOR_MATERIA1_idx` (`MATERIA_cod_Mat` ASC) VISIBLE,
  CONSTRAINT `fk_MATERIA_has_PROFESOR_MATERIA1`
    FOREIGN KEY (`MATERIA_cod_Mat`)
    REFERENCES `escuela`.`MATERIA` (`cod_Mat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_MATERIA_has_PROFESOR_PROFESOR1`
    FOREIGN KEY (`PROFESOR_id`)
    REFERENCES `escuela`.`PROFESOR` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`PROFESOR_has_ALUMNO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`PROFESOR_has_ALUMNO` ;

CREATE TABLE IF NOT EXISTS `escuela`.`PROFESOR_has_ALUMNO` (
  `PROFESOR_id` INT NOT NULL,
  `ALUMNO_id` INT NOT NULL,
  PRIMARY KEY (`PROFESOR_id`, `ALUMNO_id`),
  INDEX `fk_PROFESOR_has_ALUMNO_ALUMNO1_idx` (`ALUMNO_id` ASC) VISIBLE,
  INDEX `fk_PROFESOR_has_ALUMNO_PROFESOR1_idx` (`PROFESOR_id` ASC) VISIBLE,
  CONSTRAINT `fk_PROFESOR_has_ALUMNO_PROFESOR1`
    FOREIGN KEY (`PROFESOR_id`)
    REFERENCES `escuela`.`PROFESOR` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PROFESOR_has_ALUMNO_ALUMNO1`
    FOREIGN KEY (`ALUMNO_id`)
    REFERENCES `escuela`.`ALUMNO` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `escuela`.`ALUMNO_has_MATERIA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `escuela`.`ALUMNO_has_MATERIA` ;

CREATE TABLE IF NOT EXISTS `escuela`.`ALUMNO_has_MATERIA` (
  `ALUMNO_id` INT NOT NULL,
  `MATERIA_cod_Mat` INT NOT NULL,
  PRIMARY KEY (`ALUMNO_id`, `MATERIA_cod_Mat`),
  INDEX `fk_ALUMNO_has_MATERIA_MATERIA1_idx` (`MATERIA_cod_Mat` ASC) VISIBLE,
  INDEX `fk_ALUMNO_has_MATERIA_ALUMNO1_idx` (`ALUMNO_id` ASC) VISIBLE,
  CONSTRAINT `fk_ALUMNO_has_MATERIA_ALUMNO1`
    FOREIGN KEY (`ALUMNO_id`)
    REFERENCES `escuela`.`ALUMNO` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ALUMNO_has_MATERIA_MATERIA1`
    FOREIGN KEY (`MATERIA_cod_Mat`)
    REFERENCES `escuela`.`MATERIA` (`cod_Mat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
