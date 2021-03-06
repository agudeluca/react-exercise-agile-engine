const dataMuseService = {
  getSimilarWorlds: (word: string) =>
    fetch(`https://api.datamuse.com/words?ml=${word}&max=3`)
      .then(result => result.json())
};

export default dataMuseService;
