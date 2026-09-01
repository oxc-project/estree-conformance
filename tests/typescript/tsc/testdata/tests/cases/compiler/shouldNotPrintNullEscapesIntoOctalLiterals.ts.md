__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\x001",
              "cooked": "\u00001"
            },
            "tail": true,
            "start": 14,
            "end": 21
          }
        ],
        "expressions": [],
        "start": 14,
        "end": 21
      },
      "directive": null,
      "start": 14,
      "end": 22
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\u00001",
              "cooked": "\u00001"
            },
            "tail": true,
            "start": 23,
            "end": 32
          }
        ],
        "expressions": [],
        "start": 23,
        "end": 32
      },
      "directive": null,
      "start": 23,
      "end": 33
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\u{00000000}1",
              "cooked": "\u00001"
            },
            "tail": true,
            "start": 34,
            "end": 49
          }
        ],
        "expressions": [],
        "start": 34,
        "end": 49
      },
      "directive": null,
      "start": 34,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\u{000000}1",
              "cooked": "\u00001"
            },
            "tail": true,
            "start": 51,
            "end": 64
          }
        ],
        "expressions": [],
        "start": 51,
        "end": 64
      },
      "directive": null,
      "start": 51,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\u{0}1",
              "cooked": "\u00001"
            },
            "tail": true,
            "start": 66,
            "end": 74
          }
        ],
        "expressions": [],
        "start": 66,
        "end": 74
      },
      "directive": null,
      "start": 66,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 0,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Template",
    "value": "`\\x001`",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Template",
    "value": "`\\u00001`",
    "start": 23,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Template",
    "value": "`\\u{00000000}1`",
    "start": 34,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Template",
    "value": "`\\u{000000}1`",
    "start": 51,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Template",
    "value": "`\\u{0}1`",
    "start": 66,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  }
]
```
