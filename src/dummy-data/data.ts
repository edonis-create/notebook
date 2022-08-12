export const notesData = [
  {
    id: 1,
    title: "Examples of Dummy Data",
    description:
      "Imagine you own a big e-commerce website that sells watches in bulk. Your company is called Batch Watch — it’s your baby. One of the biggest assets the company has is the data it collects on vendors, its products, and customers.",
    created_at: "10.10.2022",
    category: "Tech",
  },
  {
    id: 2,
    title: "Testing New Programs",
    description:
      "When you started the company, you didn’t have much cash to spend on an expensive database program, so you took the first inexpensive option that came your way. Unfortunately, this means your data is not well-modeled, and you’re not really sure how that initial data program’s technical skeleton is structured.",
    created_at: "10.10.2022",
    category: "Music",
  },
  {
    id: 3,
    title: "Testing Modifications on Existing Programs",
    description:
      "Now imagine yourself 5 years after implementation of the Batch Watch DBMS. Although it worked impeccably for years, the DBMS is starting to cause trouble for your data analysts. With the advent of new online data tracking technology, your DBMS has become slightly outdated",
    created_at: "10.10.2022",
    category: "Movies",
  },
  {
    id: 4,
    title: "How to Create Dummy Data in Excel",
    description:
      "Identify observation IDs for the data set. Observation IDs are unique identifiers for each line of the data table. In the case of products, observation IDs could be product names or a numeric substitute. You need to identify the observations on which the table will be based. For example, you might use “PN1, PN2, PN3… PN10” as observation IDs for products.",
    created_at: "10.10.2022",
    category: "Data Science",
  },
];

export type NotesData = typeof notesData;
export type NoteData = typeof notesData[number];
