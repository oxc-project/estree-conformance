__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 18,
                "end": 25
              },
              "start": 16,
              "end": 25
            },
            "start": 15,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 44
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 47,
                        "end": 49
                      },
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 51,
                        "end": 55
                      }
                    ],
                    "start": 46,
                    "end": 56
                  }
                ],
                "start": 45,
                "end": 57
              }
            ],
            "start": 37,
            "end": 58
          },
          "definite": false,
          "start": 31,
          "end": 58
        }
      ],
      "declare": false,
      "start": 27,
      "end": 59
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 67
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 75
            },
            "optional": false,
            "typeAnnotation": null,
            "value": null,
            "start": 69,
            "end": 75
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 76
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 83
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "directive": null,
            "start": 91,
            "end": 93
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "directive": null,
            "start": 98,
            "end": 100
          }
        ],
        "start": 85,
        "end": 102
      },
      "start": 60,
      "end": 102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 102
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 37,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 77,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  }
]
```
