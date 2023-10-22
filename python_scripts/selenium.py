# from selenium import webdriver
# from selenium.webdriver.chrome.options import Options

# from selenium.webdriver import ActionChains
# from selenium.webdriver.common.keys import Keys

# import time
# import math
# from bs4 import BeautifulSoup


# # EXE_PATH = r'C:\Users\acarson\alexpyenv\chromedriver.exe'

# options = Options()
# # driver = webdriver.Chrome(EXE_PATH, options=options)
# options.headless = True
# driver = webdriver.Chrome(options=options)
# driver.set_window_size(1300, 700)
# action = webdriver.common.action_chains.ActionChains(driver)

# startTime = time.time()


# def run_selenium(input):
#     print('Running Selenium')
#     driver.get('https://www.google.com')
    
#     time.sleep(3)
#     ActionChains(driver).send_keys(input).perform()
#     ActionChains(driver).send_keys(Keys.ENTER).perform()
#     # driver.get('https://www.wikipedia.com')
    
#     waitStart = time.time()
#     waitTime = round(time.time()-waitStart,3)
#     soup = BeautifulSoup(driver.page_source)
#     # soup = BeautifulSoup(driver.page_source, 'lxml')
#     # 'lxml' may be faster, but requires slightly more setup.





#     return {'result': str(soup)}


# def method_error(method):
#     return {'result': f'${method} is not a recognized function.'}