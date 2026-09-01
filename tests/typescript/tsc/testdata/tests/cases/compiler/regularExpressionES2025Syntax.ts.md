__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "addModifier",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 70
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/(?i:abc)/",
            "regex": {
              "pattern": "(?i:abc)",
              "flags": ""
            },
            "start": 73,
            "end": 83
          },
          "definite": false,
          "start": 59,
          "end": 83
        }
      ],
      "declare": false,
      "start": 53,
      "end": 84
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "removeModifier",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 105
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/(?-i:abc)/",
            "regex": {
              "pattern": "(?-i:abc)",
              "flags": ""
            },
            "start": 108,
            "end": 119
          },
          "definite": false,
          "start": 91,
          "end": 119
        }
      ],
      "declare": false,
      "start": 85,
      "end": 120
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "addAndRemoveModifiers",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 148
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/(?i-ms:abc)/",
            "regex": {
              "pattern": "(?i-ms:abc)",
              "flags": ""
            },
            "start": 151,
            "end": 164
          },
          "definite": false,
          "start": 127,
          "end": 164
        }
      ],
      "declare": false,
      "start": 121,
      "end": 165
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonCapturingGroup",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 281
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/(?:abc)/",
            "regex": {
              "pattern": "(?:abc)",
              "flags": ""
            },
            "start": 284,
            "end": 293
          },
          "definite": false,
          "start": 264,
          "end": 293
        }
      ],
      "declare": false,
      "start": 258,
      "end": 294
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "duplicateNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 384
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/(?<year>\\d{4})-\\d{2}|\\d{2}\\/(?<year>\\d{4})/",
            "regex": {
              "pattern": "(?<year>\\d{4})-\\d{2}|\\d{2}\\/(?<year>\\d{4})",
              "flags": ""
            },
            "start": 387,
            "end": 431
          },
          "definite": false,
          "start": 370,
          "end": 431
        }
      ],
      "declare": false,
      "start": 364,
      "end": 432
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "duplicateNamesWithReference",
            "optional": false,
            "typeAnnotation": null,
            "start": 439,
            "end": 466
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/(?<a>x)\\k<a>|(?<a>y)/",
            "regex": {
              "pattern": "(?<a>x)\\k<a>|(?<a>y)",
              "flags": ""
            },
            "start": 469,
            "end": 491
          },
          "definite": false,
          "start": 439,
          "end": 491
        }
      ],
      "declare": false,
      "start": 433,
      "end": 492
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "distinctNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 580,
            "end": 593
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/(?<a>x)|(?<b>y)/",
            "regex": {
              "pattern": "(?<a>x)|(?<b>y)",
              "flags": ""
            },
            "start": 596,
            "end": 613
          },
          "definite": false,
          "start": 580,
          "end": 613
        }
      ],
      "declare": false,
      "start": 574,
      "end": 614
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sameAlternative",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 714
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/(?<dup>x)(?<dup>y)/",
            "regex": {
              "pattern": "(?<dup>x)(?<dup>y)",
              "flags": ""
            },
            "start": 717,
            "end": 737
          },
          "definite": false,
          "start": 699,
          "end": 737
        }
      ],
      "declare": false,
      "start": 693,
      "end": 738
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 53,
  "end": 738
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "addModifier",
    "start": 59,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "RegularExpression",
    "value": "/(?i:abc)/",
    "regex": {
      "pattern": "(?i:abc)",
      "flags": ""
    },
    "start": 73,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 85,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "removeModifier",
    "start": 91,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "RegularExpression",
    "value": "/(?-i:abc)/",
    "regex": {
      "pattern": "(?-i:abc)",
      "flags": ""
    },
    "start": 108,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 121,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "addAndRemoveModifiers",
    "start": 127,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "RegularExpression",
    "value": "/(?i-ms:abc)/",
    "regex": {
      "pattern": "(?i-ms:abc)",
      "flags": ""
    },
    "start": 151,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 258,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "nonCapturingGroup",
    "start": 264,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "RegularExpression",
    "value": "/(?:abc)/",
    "regex": {
      "pattern": "(?:abc)",
      "flags": ""
    },
    "start": 284,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 364,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "duplicateNames",
    "start": 370,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386
  },
  {
    "type": "RegularExpression",
    "value": "/(?<year>\\d{4})-\\d{2}|\\d{2}\\/(?<year>\\d{4})/",
    "regex": {
      "pattern": "(?<year>\\d{4})-\\d{2}|\\d{2}\\/(?<year>\\d{4})",
      "flags": ""
    },
    "start": 387,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 433,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "duplicateNamesWithReference",
    "start": 439,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "RegularExpression",
    "value": "/(?<a>x)\\k<a>|(?<a>y)/",
    "regex": {
      "pattern": "(?<a>x)\\k<a>|(?<a>y)",
      "flags": ""
    },
    "start": 469,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 574,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "distinctNames",
    "start": 580,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 594,
    "end": 595
  },
  {
    "type": "RegularExpression",
    "value": "/(?<a>x)|(?<b>y)/",
    "regex": {
      "pattern": "(?<a>x)|(?<b>y)",
      "flags": ""
    },
    "start": 596,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 693,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "sameAlternative",
    "start": 699,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716
  },
  {
    "type": "RegularExpression",
    "value": "/(?<dup>x)(?<dup>y)/",
    "regex": {
      "pattern": "(?<dup>x)(?<dup>y)",
      "flags": ""
    },
    "start": 717,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  }
]
```
