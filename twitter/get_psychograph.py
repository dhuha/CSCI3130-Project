import json
import time
import sys
import os
import logging

log = logging.getLogger()

class PsychoAnalyzer(object):
    def __init__(self):
        ROOT_DIR = os.path.abspath(os.path.dirname(__file__))
        self.WORD_ALL = {}
        self.CLASSNAMES = {
            'art': 1,
            'fashion': 1,
            'business': 1,
            'literature': 1,
            'politics': 1,
            'science': 1,
            'business': 1,
            'music': 1,
            'technology': 1,
            'travel': 1,
            'movies': 1,
            'books': 1,
            'video_games': 1,
            'comics': 1,
            'nature': 1,
            'fitness': 1, 
            'food_beverage': 1,
            'football': 1,
            'baseball': 1,
            'basketball': 1,
            'hockey': 1,
        }

        for name in self.CLASSNAMES:
            fn = name + ".txt"
            try:
                file_path = os.path.join(ROOT_DIR, 'data', fn)
                print file_path
                with open(file_path) as filein:
                    for word in filein:
                        word = word.strip("\n")
                        self.WORD_ALL.setdefault(word, [])
                        self.WORD_ALL[word].append(name)
            except IOError:
                log.warning("File not found for class: %s, at location: %s", name, file_path)

    #Check if word exists and map the interest to it
    def get_psycho_count(self, tweet, count={},tweet_result={}):
        cat_list = []
        for word in tweet.split():
            word=word.encode('utf-8')
            if word in self.WORD_ALL:
                cat_list = self.WORD_ALL[word]
                for cat in cat_list:
                    if count.get(cat):
                        count[cat] = count[cat] + 1
                    else:
                        count[cat] = 1
                    if not tweet_result.get(cat):
                        tweet_result[cat]=[]
                        tweet_result[cat].append(tweet)
                    else:
                        tweet_result[cat].append(tweet)
                    

        return count,tweet_result

    def get_top_psycho(self, count, average={}):
        for names in self.CLASSNAMES:
            if count.get(names):
                count[names]=float(count[names])/float(self.CLASSNAMES[names])
        top_res = sorted(count, key=count.get, reverse=True)[0:5]
        result={}
        for name in top_res:
            result[name]=count[name]
        return result

