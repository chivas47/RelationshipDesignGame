        const questions = [
            // FUTURE PLANNING (40 cards)
            { category: 'future', text: 'Do you want to have children in the next 5 years?' },
            { category: 'future', text: 'Do you see yourself living in a city long-term, or do you prefer rural/suburban life?' },
            { category: 'future', text: 'Do you want to get married, or do you prefer alternative forms of commitment?' },
            { category: 'future', text: 'Do you want to own property together within the next 10 years?' },
            { category: 'future', text: 'Do you see yourself caring for aging parents, and would you expect your partner to help?' },
            { category: 'future', text: 'Do you want to retire early, even if it means living more frugally now?' },
            { category: 'future', text: 'Do you want to start a business or major project together?' },
            { category: 'future', text: 'Do you want to live in the same city as extended family?' },
            { category: 'future', text: 'Would you consider adopting children instead of or in addition to biological children?' },
            { category: 'future', text: 'Do you want to travel extensively before settling down?' },
            { category: 'future', text: 'Would you be willing to take a sabbatical year together?' },
            { category: 'future', text: 'Do you envision yourself changing careers in the next decade?' },
            { category: 'future', text: 'Would you want to live abroad for an extended period (5+ years)?' },
            { category: 'future', text: 'Do you want to pursue further education or advanced degrees?' },
            { category: 'future', text: 'Would you be interested in alternative living arrangements (co-housing, intentional community)?' },
            { category: 'future', text: 'Do you see yourself living a minimalist lifestyle?' },
            { category: 'future', text: 'Would you want to have pets, and what kind?' },
            { category: 'future', text: 'Do you want to live somewhere with distinct seasons or stable climate year-round?' },
            { category: 'future', text: 'Would you consider fostering children?' },
            { category: 'future', text: 'Do you want to own multiple properties (vacation home, investment properties)?' },
            { category: 'future', text: 'Would you want to live on a boat or in an RV for an extended time?' },
            { category: 'future', text: 'Do you see yourself becoming more politically active in the future?' },
            { category: 'future', text: 'Would you want to build your own home from scratch?' },
            { category: 'future', text: 'Do you want to create a detailed 5-year plan together?' },
            { category: 'future', text: 'Would you be open to geographic relocation every few years for career opportunities?' },
            { category: 'future', text: 'Do you want to establish family traditions and rituals?' },
            { category: 'future', text: 'Would you consider homeschooling or alternative education for children?' },
            { category: 'future', text: 'Do you want to be heavily involved in your local community?' },
            { category: 'future', text: 'Would you want to take in extended family members if needed?' },
            { category: 'future', text: 'Do you see yourself becoming more or less social as you age?' },
            { category: 'future', text: 'Would you want to plan for early financial independence?' },
            { category: 'future', text: 'Do you want to establish a family legacy or generational wealth?' },
            { category: 'future', text: 'Would you be interested in off-grid living?' },
            { category: 'future', text: 'Do you want to be close to nature in your living situation?' },
            { category: 'future', text: 'Would you consider surrogacy or other fertility assistance?' },
            { category: 'future', text: 'Do you want to maintain separate living spaces even in a committed relationship?' },
            { category: 'future', text: 'Would you want to create a home studio or workshop space?' },
            { category: 'future', text: 'Do you see yourself becoming a mentor or community leader?' },
            { category: 'future', text: 'Would you want to plan your funeral and end-of-life wishes together?' },
            { category: 'future', text: 'Do you want to invest heavily in experiences vs. material possessions?' },

            // NON-MONOGAMY (50 cards)
            { category: 'nonmono', text: 'Are you comfortable with your partner having intimate emotional connections with others?' },
            { category: 'nonmono', text: 'Would you be open to attending events or communities focused on ethical non-monogamy?' },
            { category: 'nonmono', text: 'Do you believe it\'s possible to love multiple people romantically at the same time?' },
            { category: 'nonmono', text: 'Are you comfortable with your partner going on dates with other people?' },
            { category: 'nonmono', text: 'Would you want to have veto power over your partner\'s other relationships?' },
            { category: 'nonmono', text: 'Do you need to know details about your partner\'s other relationships?' },
            { category: 'nonmono', text: 'Would you be open to having a shared partner (polyamory/polyfidelity)?' },
            { category: 'nonmono', text: 'Would you be comfortable practicing hierarchical non-monogamy (primary/secondary partners)?' },
            { category: 'nonmono', text: 'Are you comfortable with your partner having overnight stays with other partners?' },
            { category: 'nonmono', text: 'Would you want to meet your partner\'s other partners?' },
            { category: 'nonmono', text: 'Are you comfortable with your partner having sexual relationships without emotional connection?' },
            { category: 'nonmono', text: 'Would you be interested in relationship anarchy principles?' },
            { category: 'nonmono', text: 'Do you need advance notice before your partner goes on dates?' },
            { category: 'nonmono', text: 'Would you be comfortable attending social events as a polycule?' },
            { category: 'nonmono', text: 'Are you open to your partner having long-distance relationships?' },
            { category: 'nonmono', text: 'Would you want scheduled date nights to remain protected time?' },
            { category: 'nonmono', text: 'Are you comfortable with spontaneous encounters vs. planned relationships?' },
            { category: 'nonmono', text: 'Would you want your partner to use protection with all partners?' },
            { category: 'nonmono', text: 'Do you need your partner\'s other partners to be tested regularly for STIs?' },
            { category: 'nonmono', text: 'Would you be comfortable with your partner developing feelings for someone else?' },
            { category: 'nonmono', text: 'Are you open to group relationships (triads, quads, etc.)?' },
            { category: 'nonmono', text: 'Would you want regular check-ins about feelings and experiences?' },
            { category: 'nonmono', text: 'Are you comfortable with your partner having partners you don\'t know?' },
            { category: 'nonmono', text: 'Would you be open to attending polyamory workshops or therapy together?' },
            { category: 'nonmono', text: 'Do you need reassurance about being valued in the relationship?' },
            { category: 'nonmono', text: 'Would you be comfortable with kitchen table polyamory (everyone friendly)?' },
            { category: 'nonmono', text: 'Are you more comfortable with parallel polyamory (separate relationships)?' },
            { category: 'nonmono', text: 'Would you want to be out about being non-monogamous to family?' },
            { category: 'nonmono', text: 'Are you comfortable being out about non-monogamy at work?' },
            { category: 'nonmono', text: 'Would you want to have a shared calendar with your partner\'s dates marked?' },
            { category: 'nonmono', text: 'Are you comfortable with your partner using dating apps?' },
            { category: 'nonmono', text: 'Would you want to know when your partner is going on a first date?' },
            { category: 'nonmono', text: 'Are you open to your partner\'s other relationships affecting household decisions?' },
            { category: 'nonmono', text: 'Would you be comfortable with a partner\'s other partner staying in your home?' },
            { category: 'nonmono', text: 'Do you need certain activities to remain exclusive to your relationship?' },
            { category: 'nonmono', text: 'Would you want to establish a relationship agreement or contract?' },
            { category: 'nonmono', text: 'Are you comfortable with your partner sending intimate photos to others?' },
            { category: 'nonmono', text: 'Would you be open to swinging or couple-based non-monogamy?' },
            { category: 'nonmono', text: 'Do you need to approve of your partner\'s dating pool?' },
            { category: 'nonmono', text: 'Would you want your partner to limit time spent with other partners?' },
            { category: 'nonmono', text: 'Are you comfortable with your partner developing ongoing sexual relationships?' },
            { category: 'nonmono', text: 'Would you want certain days/holidays reserved exclusively for you?' },
            { category: 'nonmono', text: 'Are you open to your partner being non-monogamous while you remain monogamous?' },
            { category: 'nonmono', text: 'Would you be comfortable with your partner having relationships with your friends?' },
            { category: 'nonmono', text: 'Do you need specific rules about safer sex practices?' },
            { category: 'nonmono', text: 'Would you want to process jealousy together when it arises?' },
            { category: 'nonmono', text: 'Are you comfortable with the idea of compersion (joy in partner\'s other relationships)?' },
            { category: 'nonmono', text: 'Would you be open to reading books or listening to podcasts about ethical non-monogamy together?' },
            { category: 'nonmono', text: 'Do you need certain physical spaces to remain private/exclusive?' },
            { category: 'nonmono', text: 'Would you want to negotiate boundaries around social media and public displays?' },

            // INTIMACY & SEX (50 cards)
            { category: 'intimacy', text: 'Do you feel comfortable discussing your sexual fantasies openly?' },
            { category: 'intimacy', text: 'Are you satisfied with the current frequency of physical intimacy in your relationship?' },
            { category: 'intimacy', text: 'Are you open to exploring new sexual experiences or practices together?' },
            { category: 'intimacy', text: 'Do you feel comfortable initiating physical intimacy?' },
            { category: 'intimacy', text: 'Are you comfortable with your partner using pornography?' },
            { category: 'intimacy', text: 'Do you feel your emotional needs are being met in the relationship?' },
            { category: 'intimacy', text: 'Are you comfortable with public displays of affection?' },
            { category: 'intimacy', text: 'Would you be open to couples therapy if needed?' },
            { category: 'intimacy', text: 'Do you feel comfortable expressing when you\'re not in the mood?' },
            { category: 'intimacy', text: 'Are you open to using toys or aids in your intimate life?' },
            { category: 'intimacy', text: 'Do you need emotional connection to enjoy physical intimacy?' },
            { category: 'intimacy', text: 'Are you comfortable discussing sexual health and testing openly?' },
            { category: 'intimacy', text: 'Would you be interested in attending tantra or intimacy workshops?' },
            { category: 'intimacy', text: 'Do you feel comfortable with role-play or fantasy exploration?' },
            { category: 'intimacy', text: 'Are you open to scheduling intimacy vs. keeping it spontaneous?' },
            { category: 'intimacy', text: 'Do you feel safe discussing boundaries and limits?' },
            { category: 'intimacy', text: 'Are you comfortable with sexting or sending intimate photos?' },
            { category: 'intimacy', text: 'Would you be open to exploring kink or BDSM practices?' },
            { category: 'intimacy', text: 'Do you need verbal communication during intimacy?' },
            { category: 'intimacy', text: 'Are you comfortable watching or creating intimate content together?' },
            { category: 'intimacy', text: 'Would you be interested in reading erotic literature together?' },
            { category: 'intimacy', text: 'Do you feel comfortable discussing what doesn\'t work for you sexually?' },
            { category: 'intimacy', text: 'Are you open to trying different locations or settings?' },
            { category: 'intimacy', text: 'Do you need cuddling and non-sexual touch regularly?' },
            { category: 'intimacy', text: 'Are you comfortable with quickies vs. longer intimate sessions?' },
            { category: 'intimacy', text: 'Would you be open to attending sex-positive events or spaces?' },
            { category: 'intimacy', text: 'Do you feel comfortable discussing your turn-ons and turn-offs?' },
            { category: 'intimacy', text: 'Are you open to using apps or games to enhance intimacy?' },
            { category: 'intimacy', text: 'Do you need certain conditions (music, lighting, etc.) to feel comfortable?' },
            { category: 'intimacy', text: 'Are you comfortable being naked around your partner?' },
            { category: 'intimacy', text: 'Would you be interested in exploring tantric practices?' },
            { category: 'intimacy', text: 'Do you feel comfortable asking for what you want explicitly?' },
            { category: 'intimacy', text: 'Are you open to morning vs. evening intimacy preferences?' },
            { category: 'intimacy', text: 'Do you need aftercare or debriefing after intimate moments?' },
            { category: 'intimacy', text: 'Are you comfortable with your partner\'s self-pleasure habits?' },
            { category: 'intimacy', text: 'Would you be interested in mutual self-pleasure?' },
            { category: 'intimacy', text: 'Do you feel pressure around performance or orgasm?' },
            { category: 'intimacy', text: 'Are you comfortable discussing body image concerns?' },
            { category: 'intimacy', text: 'Would you be open to exploring sensory play (blindfolds, etc.)?' },
            { category: 'intimacy', text: 'Do you need romance as part of physical intimacy?' },
            { category: 'intimacy', text: 'Are you comfortable with spontaneous vs. planned intimate time?' },
            { category: 'intimacy', text: 'Would you be interested in reading sex education materials together?' },
            { category: 'intimacy', text: 'Do you feel comfortable discussing past sexual experiences?' },
            { category: 'intimacy', text: 'Are you open to exploring power dynamics in intimacy?' },
            { category: 'intimacy', text: 'Do you need eye contact during intimate moments?' },
            { category: 'intimacy', text: 'Are you comfortable with dirty talk or verbal expression?' },
            { category: 'intimacy', text: 'Would you want to create a "yes/no/maybe" list together?' },
            { category: 'intimacy', text: 'Do you feel comfortable being vulnerable during sex?' },
            { category: 'intimacy', text: 'Are you open to exploring different aspects of your sexuality?' },
            { category: 'intimacy', text: 'Would you be comfortable discussing what makes you feel desired?' },

            // DECISIONS & PARTNERSHIP (40 cards)
            { category: 'decisions', text: 'Would you relocate to another country for your partner\'s career opportunity?' },
            { category: 'decisions', text: 'Would you be willing to support your partner through a major career change, even if it meant financial instability?' },
            { category: 'decisions', text: 'Would you want to make major purchases (house, car) as joint decisions?' },
            { category: 'decisions', text: 'Should household responsibilities be divided equally, regardless of income?' },
            { category: 'decisions', text: 'Would you combine finances completely, or keep some money separate?' },
            { category: 'decisions', text: 'If you disagree on a major decision, should one person have final say?' },
            { category: 'decisions', text: 'Should both partners have equal say in decorating shared living spaces?' },
            { category: 'decisions', text: 'Would you want to consult your partner before making a large purchase over €500?' },
            { category: 'decisions', text: 'Should you both have access to each other\'s phone and email?' },
            { category: 'decisions', text: 'Would you want to make vacation plans together or surprise each other?' },
            { category: 'decisions', text: 'Should major health decisions be made jointly?' },
            { category: 'decisions', text: 'Would you want your partner to consult you before accepting a job offer?' },
            { category: 'decisions', text: 'Should you agree on all friendships, or maintain independence?' },
            { category: 'decisions', text: 'Would you want to decide together how much time to spend with families?' },
            { category: 'decisions', text: 'Should dietary choices be individual or household decisions?' },
            { category: 'decisions', text: 'Would you want input on your partner\'s appearance choices?' },
            { category: 'decisions', text: 'Should you consult each other before making social commitments?' },
            { category: 'decisions', text: 'Would you want to jointly decide on political donations or activism?' },
            { category: 'decisions', text: 'Should pet ownership be a joint decision with joint responsibility?' },
            { category: 'decisions', text: 'Would you want to agree on temperature settings at home?' },
            { category: 'decisions', text: 'Should entertainment choices (TV, music) be negotiated or independent?' },
            { category: 'decisions', text: 'Would you want to decide together on charitable giving?' },
            { category: 'decisions', text: 'Should you coordinate schedules or maintain separate calendars?' },
            { category: 'decisions', text: 'Would you want input on each other\'s hobbies and interests?' },
            { category: 'decisions', text: 'Should you decide together how clean/organized the home should be?' },
            { category: 'decisions', text: 'Would you want to consult before lending money to friends/family?' },
            { category: 'decisions', text: 'Should grocery shopping and meal planning be shared decisions?' },
            { category: 'decisions', text: 'Would you want to agree on how often to host guests?' },
            { category: 'decisions', text: 'Should technology use and screen time be discussed together?' },
            { category: 'decisions', text: 'Would you want input on each other\'s medical treatments?' },
            { category: 'decisions', text: 'Should you coordinate on self-care and alone time needs?' },
            { category: 'decisions', text: 'Would you want to decide together on insurance and legal protections?' },
            { category: 'decisions', text: 'Should you agree on how to handle conflicts with friends/family?' },
            { category: 'decisions', text: 'Would you want to jointly decide on home renovations or changes?' },
            { category: 'decisions', text: 'Should you consult each other about major time commitments?' },
            { category: 'decisions', text: 'Would you want to agree on sustainability practices at home?' },
            { category: 'decisions', text: 'Should you decide together on security and privacy practices?' },
            { category: 'decisions', text: 'Would you want input on each other\'s personal projects?' },
            { category: 'decisions', text: 'Should you jointly decide on boundaries with exes?' },
            { category: 'decisions', text: 'Would you want to negotiate division of mental/emotional labor?' },

            // VALUES & LIFESTYLE (40 cards)
            { category: 'values', text: 'Is financial independence more important to you than shared finances in a relationship?' },
            { category: 'values', text: 'Do you prioritize career success over relationship time?' },
            { category: 'values', text: 'Is it important that your partner shares your political views?' },
            { category: 'values', text: 'Is maintaining close friendships outside the relationship important to you?' },
            { category: 'values', text: 'Is spirituality or religion important in your relationship?' },
            { category: 'values', text: 'Is it important that you and your partner have similar lifestyle habits (sleep schedule, diet, exercise)?' },
            { category: 'values', text: 'Is environmental sustainability a priority in household decisions?' },
            { category: 'values', text: 'Do you value spontaneity over careful planning?' },
            { category: 'values', text: 'Is personal growth more important than relationship stability?' },
            { category: 'values', text: 'Do you value adventure and risk-taking in life?' },
            { category: 'values', text: 'Is it important that your partner shares your sense of humor?' },
            { category: 'values', text: 'Do you value intellectual compatibility highly?' },
            { category: 'values', text: 'Is it important to have shared hobbies and interests?' },
            { category: 'values', text: 'Do you value independence over togetherness?' },
            { category: 'values', text: 'Is cultural background important in choosing a partner?' },
            { category: 'values', text: 'Do you value minimalism over collecting possessions?' },
            { category: 'values', text: 'Is social justice activism important to you?' },
            { category: 'values', text: 'Do you value creativity and artistic expression?' },
            { category: 'values', text: 'Is physical fitness a core value for you?' },
            { category: 'values', text: 'Do you value tradition over innovation?' },
            { category: 'values', text: 'Is emotional expressiveness important to you?' },
            { category: 'values', text: 'Do you value privacy over transparency?' },
            { category: 'values', text: 'Is community involvement important to you?' },
            { category: 'values', text: 'Do you value directness over tact in communication?' },
            { category: 'values', text: 'Is personal achievement more important than relationship milestones?' },
            { category: 'values', text: 'Do you value routine and predictability?' },
            { category: 'values', text: 'Is financial security more important than pursuing passions?' },
            { category: 'values', text: 'Do you value solitude and alone time?' },
            { category: 'values', text: 'Is social status important to you?' },
            { category: 'values', text: 'Do you value authenticity over social harmony?' },
            { category: 'values', text: 'Is loyalty the most important quality in a relationship?' },
            { category: 'values', text: 'Do you value personal freedom over commitment?' },
            { category: 'values', text: 'Is education level important to you in a partner?' },
            { category: 'values', text: 'Do you value experiences over material possessions?' },
            { category: 'values', text: 'Is emotional stability more important than passion?' },
            { category: 'values', text: 'Do you value constant communication throughout the day?' },
            { category: 'values', text: 'Is having similar energy levels important to you?' },
            { category: 'values', text: 'Do you value practicality over idealism?' },
            { category: 'values', text: 'Is having aligned life philosophies essential to you?' },
            { category: 'values', text: 'Do you value personal space over constant companionship?' },

            // COMMUNICATION (30 cards)
            { category: 'communication', text: 'Do you prefer to discuss problems immediately or take time to cool down first?' },
            { category: 'communication', text: 'Are you comfortable with constructive criticism from your partner?' },
            { category: 'communication', text: 'Do you need daily check-ins about feelings and well-being?' },
            { category: 'communication', text: 'Are you comfortable with your partner venting to friends about relationship issues?' },
            { category: 'communication', text: 'Do you prefer text/call communication throughout the day?' },
            { category: 'communication', text: 'Are you comfortable with sarcasm and teasing in your relationship?' },
            { category: 'communication', text: 'Do you need explicit verbal affirmations of love regularly?' },
            { category: 'communication', text: 'Are you comfortable with silence and not filling every moment with conversation?' },
            { category: 'communication', text: 'Do you prefer to discuss the future frequently or live in the present?' },
            { category: 'communication', text: 'Are you comfortable with your partner being blunt and direct?' },
            { category: 'communication', text: 'Do you need apologies to be explicit and detailed?' },
            { category: 'communication', text: 'Are you comfortable discussing your relationship with family members?' },
            { category: 'communication', text: 'Do you prefer written communication for serious topics?' },
            { category: 'communication', text: 'Are you comfortable with your partner needing space after an argument?' },
            { category: 'communication', text: 'Do you need to fully resolve conflicts before moving on?' },
            { category: 'communication', text: 'Are you comfortable with your partner having a different communication style?' },
            { category: 'communication', text: 'Do you prefer to give/receive feedback in the moment or save it for later?' },
            { category: 'communication', text: 'Are you comfortable discussing your relationship in public?' },
            { category: 'communication', text: 'Do you need regular relationship "state of the union" talks?' },
            { category: 'communication', text: 'Are you comfortable with your partner being friends with exes?' },
            { category: 'communication', text: 'Do you prefer subtle hints or explicit requests?' },
            { category: 'communication', text: 'Are you comfortable with passionate arguing as a communication style?' },
            { category: 'communication', text: 'Do you need morning/evening routines to include communication?' },
            { category: 'communication', text: 'Are you comfortable with your partner sharing relationship details on social media?' },
            { category: 'communication', text: 'Do you prefer to process emotions verbally or internally?' },
            { category: 'communication', text: 'Are you comfortable with your partner knowing all your passwords?' },
            { category: 'communication', text: 'Do you need reassurance about the relationship regularly?' },
            { category: 'communication', text: 'Are you comfortable with confrontation when necessary?' },
            { category: 'communication', text: 'Do you prefer to celebrate achievements publicly or privately?' },
            { category: 'communication', text: 'Are you comfortable with different love languages between partners?' },

            // BOUNDARIES (25 cards)
            { category: 'boundaries', text: 'Do you need alone time daily, or are you comfortable with constant companionship?' },
            { category: 'boundaries', text: 'Are you comfortable with your partner having close friendships with people they find attractive?' },
            { category: 'boundaries', text: 'Do you need physical space (separate rooms/areas) in your home?' },
            { category: 'boundaries', text: 'Are you comfortable with your partner going out alone to bars/clubs?' },
            { category: 'boundaries', text: 'Do you need boundaries around work-life balance?' },
            { category: 'boundaries', text: 'Are you comfortable with your partner having solo vacations?' },
            { category: 'boundaries', text: 'Do you need emotional boundaries around discussing certain topics?' },
            { category: 'boundaries', text: 'Are you comfortable with last-minute plan changes?' },
            { category: 'boundaries', text: 'Do you need boundaries around substance use?' },
            { category: 'boundaries', text: 'Are you comfortable with your partner having separate social circles?' },
            { category: 'boundaries', text: 'Do you need clear boundaries around phone/technology use?' },
            { category: 'boundaries', text: 'Are you comfortable with your partner maintaining privacy in some areas?' },
            { category: 'boundaries', text: 'Do you need boundaries around visiting each other\'s workplaces?' },
            { category: 'boundaries', text: 'Are you comfortable with your partner having intense platonic friendships?' },
            { category: 'boundaries', text: 'Do you need boundaries around discussing your relationship with others?' },
            { category: 'boundaries', text: 'Are you comfortable with your partner pursuing risky hobbies?' },
            { category: 'boundaries', text: 'Do you need clear boundaries around family involvement in your relationship?' },
            { category: 'boundaries', text: 'Are you comfortable with your partner maintaining separate finances?' },
            { category: 'boundaries', text: 'Do you need boundaries around personal appearance or grooming?' },
            { category: 'boundaries', text: 'Are you comfortable with your partner having different sleep schedules?' },
            { category: 'boundaries', text: 'Do you need boundaries around how much time is spent on hobbies?' },
            { category: 'boundaries', text: 'Are you comfortable with your partner choosing to skip family events?' },
            { category: 'boundaries', text: 'Do you need boundaries around surprise visits or drop-ins?' },
            { category: 'boundaries', text: 'Are you comfortable with your partner maintaining separate friend groups?' },
            { category: 'boundaries', text: 'Do you need clear boundaries around personal creative/work projects?' },

            // FINANCE (25 cards)
            { category: 'finance', text: 'Should you maintain separate bank accounts or share everything?' },
            { category: 'finance', text: 'Do you believe in prenuptial agreements?' },
            { category: 'finance', text: 'Should the higher earner have more say in financial decisions?' },
            { category: 'finance', text: 'Are you comfortable with significant income disparity?' },
            { category: 'finance', text: 'Should you disclose all purchases to each other?' },
            { category: 'finance', text: 'Do you believe in having personal "fun money" separate from shared expenses?' },
            { category: 'finance', text: 'Should you split costs 50/50 or proportionally to income?' },
            { category: 'finance', text: 'Are you comfortable with your partner having debt?' },
            { category: 'finance', text: 'Should you create a detailed household budget together?' },
            { category: 'finance', text: 'Do you believe in saving aggressively or enjoying money now?' },
            { category: 'finance', text: 'Should you consult each other before lending money to friends/family?' },
            { category: 'finance', text: 'Are you comfortable with risky investments?' },
            { category: 'finance', text: 'Should you have joint or separate credit cards?' },
            { category: 'finance', text: 'Do you believe the person who cooks shouldn\'t have to clean?' },
            { category: 'finance', text: 'Should financial goals be set together or individually?' },
            { category: 'finance', text: 'Are you comfortable discussing exact salaries and net worth?' },
            { category: 'finance', text: 'Should retirement planning be coordinated?' },
            { category: 'finance', text: 'Do you believe in keeping inheritance separate or sharing?' },
            { category: 'finance', text: 'Should you both have equal access to all financial information?' },
            { category: 'finance', text: 'Are you comfortable with one partner being the primary breadwinner?' },
            { category: 'finance', text: 'Should large gifts to family members be jointly approved?' },
            { category: 'finance', text: 'Do you believe in having an emergency fund before discretionary spending?' },
            { category: 'finance', text: 'Should vacation budgets be agreed upon in advance?' },
            { category: 'finance', text: 'Are you comfortable with your partner\'s spending habits?' },
            { category: 'finance', text: 'Should you have regular financial check-in meetings?' },

            // FAMILY & SOCIAL (25 cards)
            { category: 'family', text: 'Should holidays be alternated between families or established elsewhere?' },
            { category: 'family', text: 'Are you comfortable with frequent family visits (weekly or more)?' },
            { category: 'family', text: 'Should you present a united front even when disagreeing with family?' },
            { category: 'family', text: 'Are you comfortable with your partner\'s family having house keys?' },
            { category: 'family', text: 'Should family be invited to all major life events?' },
            { category: 'family', text: 'Are you comfortable with unannounced family visits?' },
            { category: 'family', text: 'Should you prioritize partner\'s family events over friend events?' },
            { category: 'family', text: 'Are you comfortable with family members giving parenting advice?' },
            { category: 'family', text: 'Should you defend your partner in family conflicts?' },
            { category: 'family', text: 'Are you comfortable with different levels of family closeness?' },
            { category: 'family', text: 'Should family traditions be maintained or new ones created?' },
            { category: 'family', text: 'Are you comfortable with family knowing intimate relationship details?' },
            { category: 'family', text: 'Should you be expected to attend all extended family gatherings?' },
            { category: 'family', text: 'Are you comfortable with family members staying for extended visits?' },
            { category: 'family', text: 'Should family be involved in major life decisions?' },
            { category: 'family', text: 'Are you comfortable with your partner venting about you to family?' },
            { category: 'family', text: 'Should you spend equal time with both families?' },
            { category: 'family', text: 'Are you comfortable with family members disciplining your children?' },
            { category: 'family', text: 'Should you coordinate social calendars to ensure couple time?' },
            { category: 'family', text: 'Are you comfortable with your partner having regular solo friend time?' },
            { category: 'family', text: 'Should couple friends take priority over individual friends?' },
            { category: 'family', text: 'Are you comfortable attending events separately?' },
            { category: 'family', text: 'Should you include your partner in all social plans?' },
            { category: 'family', text: 'Are you comfortable with your partner\'s friends from before the relationship?' },
            { category: 'family', text: 'Should you create boundaries around how much you socialize vs. stay home?' },

            // PERSONAL GROWTH & INDIVIDUALITY (25 cards)
            { category: 'personal', text: 'Should personal hobbies be pursued even if they take significant time?' },
            { category: 'personal', text: 'Are you comfortable with your partner changing significantly over time?' },
            { category: 'personal', text: 'Should you support each other\'s goals even if they conflict with the relationship?' },
            { category: 'personal', text: 'Are you comfortable with your partner pursuing therapy individually?' },
            { category: 'personal', text: 'Should personal development be a shared priority?' },
            { category: 'personal', text: 'Are you comfortable with your partner having different political evolution?' },
            { category: 'personal', text: 'Should you encourage each other to step outside comfort zones?' },
            { category: 'personal', text: 'Are you comfortable with your partner exploring different identities (gender, sexuality)?' },
            { category: 'personal', text: 'Should personal achievements be celebrated equally?' },
            { category: 'personal', text: 'Are you comfortable with your partner having a separate creative outlet?' },
            { category: 'personal', text: 'Should you both maintain individual goal-setting practices?' },
            { category: 'personal', text: 'Are you comfortable with your partner needing significant alone time?' },
            { category: 'personal', text: 'Should personal growth sometimes take precedence over relationship stability?' },
            { category: 'personal', text: 'Are you comfortable with your partner exploring spirituality independently?' },
            { category: 'personal', text: 'Should you actively encourage each other\'s personal dreams?' },
            { category: 'personal', text: 'Are you comfortable with your partner making major personal changes?' },
            { category: 'personal', text: 'Should individuality be preserved within the relationship?' },
            { category: 'personal', text: 'Are you comfortable with your partner having separate morning/evening routines?' },
            { category: 'personal', text: 'Should personal mistakes be learning experiences vs. relationship issues?' },
            { category: 'personal', text: 'Are you comfortable with your partner pursuing education that requires time away?' },
            { category: 'personal', text: 'Should you both have regular "you time" built into schedules?' },
            { category: 'personal', text: 'Are you comfortable with different personal productivity styles?' },
            { category: 'personal', text: 'Should personal boundaries be respected even when inconvenient?' },
            { category: 'personal', text: 'Are you comfortable with your partner\'s self-expression (clothing, appearance)?' },
            { category: 'personal', text: 'Should personal fulfillment be as important as relationship harmony?' }
        ];

        let currentCard = 0;
        let responses = {};

        const categoryNames = {
            future: 'Future Planning',
            nonmono: 'Non-Monogamy',
            decisions: 'Joint Decisions',
            intimacy: 'Intimacy & Sex',
            values: 'Values & Lifestyle',
            communication: 'Communication',
            boundaries: 'Boundaries',
            finance: 'Finance',
            family: 'Family & Social',
            personal: 'Personal Growth'
        };

        function loadResponses() {
            const saved = localStorage.getItem('relationshipGameResponses');
            if (saved) {
                responses = JSON.parse(saved);
            }
        }

        function saveResponses() {
            localStorage.setItem('relationshipGameResponses', JSON.stringify(responses));
        }

        function displayCard() {
            const question = questions[currentCard];
            document.getElementById('progress').textContent = `Card ${currentCard + 1} of ${questions.length}`;
            
            const progressPercent = ((currentCard + 1) / questions.length) * 100;
            document.getElementById('progressFill').style.width = progressPercent + '%';
            
            document.getElementById('question').textContent = question.text;
            
            const categoryTag = document.getElementById('categoryTag');
            categoryTag.className = `category-tag cat-${question.category}`;
            categoryTag.textContent = categoryNames[question.category];

            updateButtonStates();
        }

        function updateButtonStates() {
            const currentResponse = responses[currentCard];
            document.querySelectorAll('.buttons button').forEach(btn => {
                btn.style.opacity = '1';
                btn.style.border = '2px solid transparent';
            });

            if (currentResponse) {
                const buttons = document.querySelectorAll('.buttons button');
                buttons.forEach(btn => btn.style.opacity = '0.5');
                
                if (currentResponse === 'yes') {
                    buttons[0].style.opacity = '1';
                    buttons[0].style.border = '2px solid #00b894';
                } else if (currentResponse === 'no') {
                    buttons[1].style.opacity = '1';
                    buttons[1].style.border = '2px solid #d63031';
                } else if (currentResponse === 'discuss') {
                    buttons[2].style.opacity = '1';
                    buttons[2].style.border = '2px solid #fdcb6e';
                }
            }
        }

        function answer(response) {
            responses[currentCard] = response;
            saveResponses();
            updateButtonStates();
            
            setTimeout(() => {
                if (currentCard < questions.length - 1) {
                    nextCard();
                }
            }, 300);
        }

        function nextCard() {
            if (currentCard < questions.length - 1) {
                currentCard++;
                displayCard();
            }
        }

        function previousCard() {
            if (currentCard > 0) {
                currentCard--;
                displayCard();
            }
        }

        function randomCard() {
            currentCard = Math.floor(Math.random() * questions.length);
            displayCard();
        }

        function jumpToCard() {
            const input = document.getElementById('jumpInput');
            const cardNum = parseInt(input.value);
            if (cardNum >= 1 && cardNum <= questions.length) {
                currentCard = cardNum - 1;
                displayCard();
                input.value = '';
            }
        }

        function showReview() {
            document.getElementById('gameContainer').style.display = 'none';
            document.getElementById('reviewContainer').style.display = 'block';
            displayReview();
        }

        function backToGame() {
            document.getElementById('gameContainer').style.display = 'flex';
            document.getElementById('reviewContainer').style.display = 'none';
        }

        function displayReview(filter = 'all') {
            const reviewList = document.getElementById('reviewList');
            const filterButtons = document.getElementById('filterButtons');
            const statsDiv = document.getElementById('stats');
            
            // Calculate stats
            const yesCount = Object.values(responses).filter(r => r === 'yes').length;
            const noCount = Object.values(responses).filter(r => r === 'no').length;
            const discussCount = Object.values(responses).filter(r => r === 'discuss').length;
            const answeredCount = Object.keys(responses).length;
            
            statsDiv.innerHTML = `
                <div class="stat-card">
                    <div class="stat-number">${answeredCount}</div>
                    <div class="stat-label">Answered</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${questions.length - answeredCount}</div>
                    <div class="stat-label">Remaining</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${yesCount}</div>
                    <div class="stat-label">Yes</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${noCount}</div>
                    <div class="stat-label">No</div>
                </div>
            `;
            
            filterButtons.innerHTML = `
                <button class="btn-secondary filter-btn ${filter === 'all' ? 'active' : ''}" onclick="displayReview('all')">All</button>
                <button class="btn-secondary filter-btn ${filter === 'yes' ? 'active' : ''}" onclick="displayReview('yes')">Yes (${yesCount})</button>
                <button class="btn-secondary filter-btn ${filter === 'no' ? 'active' : ''}" onclick="displayReview('no')">No (${noCount})</button>
                <button class="btn-secondary filter-btn ${filter === 'discuss' ? 'active' : ''}" onclick="displayReview('discuss')">Discuss (${discussCount})</button>
                <button class="btn-secondary filter-btn ${filter === 'unanswered' ? 'active' : ''}" onclick="displayReview('unanswered')">Unanswered (${questions.length - answeredCount})</button>
            `;

            reviewList.innerHTML = '';
            
            questions.forEach((q, index) => {
                const response = responses[index];
                
                if (filter !== 'all') {
                    if (filter === 'unanswered' && response) return;
                    if (filter !== 'unanswered' && response !== filter) return;
                }

                const card = document.createElement('div');
                card.className = 'review-card';
                card.innerHTML = `
                    <div class="category-tag cat-${q.category}" style="margin-bottom: 10px;">${categoryNames[q.category]}</div>
                    <div class="review-question">${index + 1}. ${q.text}</div>
                    <span class="review-answer answer-${response || 'unanswered'}">
                        ${response === 'yes' ? '✓ Yes' : 
                          response === 'no' ? '✗ No' : 
                          response === 'discuss' ? '💬 Need to discuss' : 
                          '— Not answered yet'}
                    </span>
                `;
                card.style.cursor = 'pointer';
                card.onclick = () => {
                    currentCard = index;
                    backToGame();
                    displayCard();
                };
                reviewList.appendChild(card);
            });
        }

        // Initialize
        loadResponses();
        displayCard();

        // Allow Enter key on jump input
        document.getElementById('jumpInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') jumpToCard();
        });
 
