__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": null,
        "raw": "/(?<a>x)(?<a>y)/",
        "regex": {
          "pattern": "(?<a>x)(?<a>y)",
          "flags": ""
        },
        "start": 68,
        "end": 84
      },
      "directive": null,
      "start": 68,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": null,
        "raw": "/(?:(?<a>x))(?<a>z)/",
        "regex": {
          "pattern": "(?:(?<a>x))(?<a>z)",
          "flags": ""
        },
        "start": 146,
        "end": 166
      },
      "directive": null,
      "start": 146,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": null,
        "raw": "/(?:(?<a>x)|y)(?<a>z)/",
        "regex": {
          "pattern": "(?:(?<a>x)|y)(?<a>z)",
          "flags": ""
        },
        "start": 245,
        "end": 267
      },
      "directive": null,
      "start": 245,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": null,
        "raw": "/(?=(?<a>x))(?<a>z)/",
        "regex": {
          "pattern": "(?=(?<a>x))(?<a>z)",
          "flags": ""
        },
        "start": 329,
        "end": 349
      },
      "directive": null,
      "start": 329,
      "end": 350
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": null,
        "raw": "/((?<a>x))(?<a>z)/",
        "regex": {
          "pattern": "((?<a>x))(?<a>z)",
          "flags": ""
        },
        "start": 407,
        "end": 425
      },
      "directive": null,
      "start": 407,
      "end": 426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": null,
        "raw": "/(?<a>x)|(?<a>y)/",
        "regex": {
          "pattern": "(?<a>x)|(?<a>y)",
          "flags": ""
        },
        "start": 505,
        "end": 522
      },
      "directive": null,
      "start": 505,
      "end": 523
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": null,
        "raw": "/(?:(?<a>x)|(?<a>y))/",
        "regex": {
          "pattern": "(?:(?<a>x)|(?<a>y))",
          "flags": ""
        },
        "start": 602,
        "end": 623
      },
      "directive": null,
      "start": 602,
      "end": 624
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 624
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "RegularExpression",
    "value": "/(?<a>x)(?<a>y)/",
    "regex": {
      "pattern": "(?<a>x)(?<a>y)",
      "flags": ""
    },
    "start": 68,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "RegularExpression",
    "value": "/(?:(?<a>x))(?<a>z)/",
    "regex": {
      "pattern": "(?:(?<a>x))(?<a>z)",
      "flags": ""
    },
    "start": 146,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "RegularExpression",
    "value": "/(?:(?<a>x)|y)(?<a>z)/",
    "regex": {
      "pattern": "(?:(?<a>x)|y)(?<a>z)",
      "flags": ""
    },
    "start": 245,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "RegularExpression",
    "value": "/(?=(?<a>x))(?<a>z)/",
    "regex": {
      "pattern": "(?=(?<a>x))(?<a>z)",
      "flags": ""
    },
    "start": 329,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "RegularExpression",
    "value": "/((?<a>x))(?<a>z)/",
    "regex": {
      "pattern": "((?<a>x))(?<a>z)",
      "flags": ""
    },
    "start": 407,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "RegularExpression",
    "value": "/(?<a>x)|(?<a>y)/",
    "regex": {
      "pattern": "(?<a>x)|(?<a>y)",
      "flags": ""
    },
    "start": 505,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "RegularExpression",
    "value": "/(?:(?<a>x)|(?<a>y))/",
    "regex": {
      "pattern": "(?:(?<a>x)|(?<a>y))",
      "flags": ""
    },
    "start": 602,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  }
]
```
