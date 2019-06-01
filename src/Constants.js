module.exports = {
  columns: [
    {
      name: "Rank",
      selector: "Rank",
      sortable: true,
    },
    {
      name: "Name",
      selector: "Name",
      sortable: true,
      right: true
    },
    {
      name: "Platform",
      selector: "Platform",
      sortable: true,
      right: true
    },
    {
      name: "Year",
      selector: "Yame",
      sortable: true,
      right: true
    },
    {
      name: "Genre",
      selector: "Genre",
      sortable: true,
      right: true
    },
    {
      name: "Publisher",
      selector: "Publisher",
      sortable: true,
      right: true
    },
    {
      name: "Global Sales",
      selector: "Global_Sales",
      sortable: true,
      right: true
    }
  ],
  rowTheme: {
    rows: {
      spacing: "spaced",
      spacingBorderRadius: "50px",
      spacingMargin: "3px",
      borderColor: "rgba(0,0,0,.12)",
      backgroundColor: "white",
      height: "52px"
    },
    cells: {
      cellPadding: "48px"
    }
  },
  keys: [
    "Rank",
    "Name",
    "Platform",
    "Year",
    "Genre",
    "Publisher",
    "Global_Sales"
  ]
};
