import { useQuery } from "@tanstack/react-query";

const useNonFictionBooks = () => {
    const { data: nonFictionBooks, isLoading: isNonFictionBooksLoading } = useQuery({
        queryKey: ['nonFictionBooks'],
        queryFn: async() => {
            const res = await fetch('https://rokomari-clone-server.vercel.app/non-fiction-books');
            return res.json()
        },
      })
      return [nonFictionBooks, isNonFictionBooksLoading]
};

export default useNonFictionBooks;