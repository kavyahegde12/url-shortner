const Url = require('../Models/urlModel');
const { generateShortUrl } = require('../utils/urlGenerator');

exports.createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const shortUrl = generateShortUrl();

    const newUrl = new Url({ originalUrl, shortUrl });
    await newUrl.save();

    res.status(201).json({ id: newUrl._id, originalUrl, shortUrl });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getUrlById = async (req, res) => {
  try {
    const { id } = req.params;
    const url = await Url.findById(id);

    if (!url) return res.status(404).json({ message: 'URL not found' });
    
    res.status(200).json(url);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find();
    res.status(200).json(urls);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const { originalUrl } = req.body;
    const updatedUrl = await Url.findByIdAndUpdate(id, { originalUrl }, { new: true });

    if (!updatedUrl) return res.status(404).json({ message: 'URL not found' });

    res.status(200).json(updatedUrl);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUrl = await Url.findByIdAndDelete(id);

    if (!deletedUrl) return res.status(404).json({ message: 'URL not found' });

    res.status(200).json({ message: 'URL deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
