const romanNumbers = [
	"I",
	"II",
	"III",
	"IV",
	"V",
	"VI",
	"VII",
	"VIII",
	"IX",
	"X",
	"volume",
];

const bookPart = (title: string) => {
	if (title !== "") {
		const titleArr = title.split(" ");
		console.log(titleArr);
		const match = titleArr
			.map((word) =>
				romanNumbers.find((num) => word.toLowerCase() === num.toLowerCase())
			)
			.filter(Boolean);
		console.log(match);
	}
};

bookPart("The of rice volume III");
