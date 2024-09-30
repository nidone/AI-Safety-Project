---
layout: default
title: Conclusions - AI Safety Project
---

# Conclusions

- I have emphasized the critical importance of evaluating LLMs specifically in the context of youth safety.
- Through the evaluation process, I:
  - Prototyped “Categories of Harm” based on extensive past research. Though still in a rudimentary stage, these categories have proven useful in streamlining the development of the dataset.
  - Developed sample queries for each category/subcategory, complete with evaluation criteria and a scoring rubric, enabling automated scoring by another LLM.
  - Conducted evaluations using a small dataset across five popular LLMs.
- Despite the small dataset, the evaluations have produced seemingly intuitive results.
  - Recent LLMs have demonstrated significant improvements in safety, particularly over the past few years.
  - However, they remain imperfect. Initial findings suggest an occasional risk of exposing youth to age-inappropriate content, largely due to LLMs' inability to reliably recognize the user's age.

## Discussions

- **Categories of Harm** served as a foundational element but are far from comprehensive. Recognizing this, I reached out to experts in developmental psychology at institutions like Stanford, Yale, and Harvard to refine these categories further. Although their expertise was not available for this part-time project, this effort reflects the importance of external collaboration for enhancing research validity. 
- **LLM-driven Scoring** involved using GPT-4o to score responses from other LLMs. As expected, scoring by this aprroach was not always consistent -- inconsistencies could occur between different versions of the GPT-4 family, and even within the same version. However, this method seems to strike the right balance between accuracy and efficiency, while remaining cost-effective (less than $1 to evaluate 13 responses from 5 LLMs).

## Future Work

- **Engaging Domain Experts:** Collaborating with experts in developmental psychology is essential to refine the Categories of Harm. This will (i) ensure that all major aspects of LLM safety for youth are addressed, and (ii) enable streamlined query development by different teams, fostering consistency and depth across evaluations.
- **Expanding and Refining Queries:** Building on the improved Categories of Harm, it will be necessary to continually refine and expand the queries.
- **Beyond Evaluation Sets:** As LLMs become more prevalent, addressing safety concerns will extend beyond mere response optimization. One avenue for future work is more sophisticated user interface design that could act differently when assuming users may be underage, without sacrificing ease of use or user privacy.
<br /> <br />