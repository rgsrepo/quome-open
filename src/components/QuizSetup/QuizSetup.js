import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@reach/router";

import styles from "./QuizSetup.module.css";
import mockData from "data/data";

export default function QuizSetup({ subjectId }) {

  const { t } = useTranslation();

  const [competence, setCompetence] = useState("");
  const [nb, setNb] = useState(0);

  const competences = Object.values(mockData.subjectCompetences).find(
    (subjectCompetence) => subjectCompetence.subject === subjectId
  );

  const handleChange1 = (e) => {
    setCompetence(e.target.value);
  };

  const handleChange2 = (e) => {
    setNb(e.target.value);
  };

  return (
    <div className={styles.form}>
      <form action={`/quiz/${competence}/${nb}`} class="needs-validation">
        <div class="form-group">
          <select value={competence} onChange={handleChange1} class="custom-select" id="selectQuestion" required>
            <option value="">{t("competenceChoice")}</option>
            {competences.competences.map((competence) => (
              <option value={competence}>{t(competence)}</option>
            ))}
          </select>
        </div>
        <div class="form-group">
          <select value={nb} onChange={handleChange2} class="custom-select" id="selectQuestionNb" required>
            <option value="">{t("nbOfQuestions")}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        
        <button id="beginQuiz" type="submit" class="btn btn-primary mb-2">Begin</button>

      </form>
    </div>
    
  );
}
