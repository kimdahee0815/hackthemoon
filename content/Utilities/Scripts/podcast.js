module.exports = {
  entry: (params, settings) => {
    const pn = params.app.plugins.plugins.podnotes.api;
    const podcast = pn.podcast;

    if (!podcast) {
      new Notice("No podcast loaded.", 5000);
      throw new Error();
    }

    params.variables = {
      ...podcast,
      ...params.variables,
      safeTitle: replaceIllegalFileNameCharactersInString(podcast.title),
    };
  },
  settings: {
    name: "Podcast Script",
    author: "Christian",
    options: {},
  },
};

function replaceIllegalFileNameCharactersInString(string) {
  return string
    .replace(/[\\,#%&\{\}\/*<>$\'\":@\u2023\|\?]*/g, "") // Replace illegal file name characters with empty string
    .replace(/\n/, " ") // replace newlines with spaces
    .replace("  ", " "); // replace multiple spaces with single space to make sure we don't have double spaces in the file name
}
