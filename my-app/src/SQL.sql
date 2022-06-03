-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema wordament
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema wordament
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wordament` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `wordament` ;

-- -----------------------------------------------------
-- Table `wordament`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wordament`.`user` (
  `ID` CHAR(36) NOT NULL,
  `Username` VARCHAR(255) NULL DEFAULT NULL,
  `FirstName` VARCHAR(255) NOT NULL,
  `LastName` VARCHAR(255) NOT NULL,
  `LoginPassword` BINARY(32) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `Username` (`Username` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `wordament`.`scores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `wordament`.`scores` (
  `Username` VARCHAR(255) NULL DEFAULT NULL,
  `Score` INT NOT NULL,
  INDEX `Username` (`Username` ASC) VISIBLE,
  CONSTRAINT `scores_ibfk_1`
    FOREIGN KEY (`Username`)
    REFERENCES `wordament`.`user` (`Username`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
