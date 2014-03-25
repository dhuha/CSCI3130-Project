from oauth_key import *
import twitter
import json
import time
import sys 
import urllib

#ACCESSS TOKEN
TOKEN = '410574164-heFhgfcGW52sA9qaI9eCuLLiDA9xvT4uA8hrYXTk'
TOKEN_SECRET = 'H8nCUoBQP6FuwRkKLubxqw55kWkFjRtpRYS9jtcXOkY'
APP_KEY = 's73KHKUy1wJpBJCIdHO5w'
APP_SECRET='2ByKpNC0uAssMub5NL2dtBbs1O8djS4t5I67vMPMSaY'

oauth = twitter.OAuth(api_key[0]["TOKEN"],api_key[0]["TOKEN_SECRET"],api_key[0]["APP_KEY"],api_key[0]['APP_SECRET'])
ts = twitter.Twitter(auth=oauth,api_version='1.1')


def download(screen_name):

	name = screen_name.strip('\n')
	information = {}
	information['screen_name'] = name

	tweets = []
	print name
	try:
            stream = ts.statuses.user_timeline(screen_name = name, count = 200)
            kwargs = {'screen_name':name,'count':200}
	    if len(stream)!=0:
                information['bio'] = stream[0]['user']['description']
                #print information['bio']
            print "Donload user ",name," information"
            information['entities'] = stream[0]['user']
            print information['entities']['location']
            url = stream[0]['user']['profile_image_url']
            print url 
            data = urllib.urlopen(url).read()
            path ='new_image/'+ name+'.jpg'
            f = open(path,"wb")
            f.write(data) 
            time.sleep(5) 
            for i in range(0,4):
            	print "Downloading",i,"th term"
                for line in stream:
                	#print line['created_at']
                	tweet = line['text']
                	#print tweet
                	tweets.append(tweet) 
                try:
                    kwargs['max_id'] = min([x['id'] for x in stream]) -1
               	except Exception:
                    print sys.exc_info()
                    break
             	stream = ts.statuses.user_timeline(**kwargs)
                print "Sleeping"
                time.sleep(5)

    	except Exception:
        	print "Twitter screen name does not exist, please try again"
		sys.exit(0)	
	information['tweets'] = tweets
    	return information



