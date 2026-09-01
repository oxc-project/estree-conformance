__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "narrow",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 40,
                      "end": 46
                    },
                    "start": 40,
                    "end": 48
                  },
                  "start": 31,
                  "end": 48
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 51,
                  "end": 57
                }
              ],
              "start": 31,
              "end": 57
            },
            "start": 29,
            "end": 57
          },
          "start": 28,
          "end": 57
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 69,
              "end": 75
            },
            "start": 69,
            "end": 77
          },
          "start": 60,
          "end": 77
        },
        "start": 58,
        "end": 77
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 89
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 106
              },
              "start": 88,
              "end": 106
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 126
                  },
                  "start": 118,
                  "end": 127
                }
              ],
              "start": 108,
              "end": 133
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 158
                      }
                    ],
                    "start": 156,
                    "end": 159
                  },
                  "start": 149,
                  "end": 160
                }
              ],
              "start": 139,
              "end": 166
            },
            "start": 84,
            "end": 166
          }
        ],
        "start": 78,
        "end": 168
      },
      "expression": false,
      "start": 12,
      "end": 168
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 168
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 12,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "narrow",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 31,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 51,
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
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 60,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 90,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 118,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  }
]
```
