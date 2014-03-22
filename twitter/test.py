from get_psychograph import *
import json
test_data = open('lg_users_tweetBio')

psy = PsychoAnalyzer()
out_data_path = 'test_result/'
for name in  psy.CLASSNAMES.keys():
    out_data = open(out_data_path+name,'a')
def test(test_data):
    for line in test_data:
        line = line.strip('\n')
        tweet_bio = json.loads(line)
        name = tweet_bio['screen_name']    
        print name,'\t',
        user_bio_list = []
        print 'https://twitter.com/'+name,'\t',

        bio = tweet_bio['bio']
        print bio,'\t',
        attributes = name+'\t'+'https://twitter.com/'+name+'\t'+bio+'\t'
        
        total_number = str(len(tweet_bio['tweets']))
        count ={}
        print total_number,'\t',
        tweet_result = {}
        for tweet in tweet_bio['tweets']:
            tweet = tweet.lower().strip('\n')
            count,tweet_result = psy.get_psycho_count(tweet,count,tweet_result)
        result = psy.get_top_psycho(count)
        for cat in count.keys():
            print cat,'\t',
            print attributes,'\t',
            with open(out_data_path+cat,'a') as output:
                try:
                    output.write(attributes+'\t')
                except Exception:
                    continue
                match_tweets = str(len(tweet_result[cat])) 
                print match_tweets,'\t',
                output.write(match_tweets+'\t'+total_number+'\t')
                i=0
                if cat in result.keys():
                    print 'YES','\t',
                    output.write('YES'+'\t')
                else:
                    print 'NO','\t',
                    output.write('NO'+'\t')
                if len(tweet_result[cat])>5:
                    for tweet in tweet_result[cat]:
                        try:
                            if i>=5:
                                break
                            print tweet,'\t',
                            output.write(tweet+'\t')
                            i=+1
                        except Exception:
                            continue
                else:
                    for tweet in tweet_result[cat]:
                        try:
                            print tweet,'\t',
                            output.write(tweet+'\t')

                        except Exception:
                            continue
                output.write('\n')
                    
        
test(test_data)
