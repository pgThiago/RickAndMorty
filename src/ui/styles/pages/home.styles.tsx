import tw from "tailwind-styled-components";

export const Container = tw.div`	
	flex
	items-center
	justify-center
	flex-col
	w-full
	h-full
	bg-black
	font-sans
`;

export const Header = tw.header`flex
	items-center
	justify-center
	flex-col
	w-4/5	
`;

export const Logo = tw.img`	
	mt-2
`;

export const SearchInput = tw.input`
	my-6
	mx-12
	w-full
	md:w-3/6
	border-0
	border-b-2
	focus:outline-none 
	focus:ring 
	focus:border-blue-300
	bg-black
	text-white
	p-2
`;

export const WatchFavoritesButton = tw.button`
bg-green-500
	text-white
	text-md
	w-full
	h-10
	md:w-48
	hover:bg-green-900
`;

export const ListOfCharacters = tw.div`
	w-4/5
	mt-10
	rounded-lg
	grid
	grid-cols-1
	md:grid-cols-3
	sm:grid-cols-2
	gap-y-8
	gap-x-4
	justify-items-center
	align-items-center
bg-black
	h-full
`;

export const InfoContainer = tw.div`
	w-4/5
	flex
	items-center
	justify-center
`;

export const InfoMessage = tw.span`
	my-10
  text-lg
	text-white	
`;

export const PaginationContainer = tw.footer`
	mt-20
	w-4/5
	md:w-1/5
	sm:w-1/6
	flex
	items-center
	justify-between
`;

export const HandlePageButton = tw.button`
bg-gray-900
	text-white
	text-md
	w-2/6
	h-10
	md:w-2/5
	hover:bg-green-500
`;
