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
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 17
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
                        "start": 20,
                        "end": 22
                      },
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 24,
                        "end": 28
                      }
                    ],
                    "start": 19,
                    "end": 29
                  }
                ],
                "start": 18,
                "end": 30
              }
            ],
            "start": 10,
            "end": 31
          },
          "definite": false,
          "start": 4,
          "end": 31
        }
      ],
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "init": null,
            "definite": false,
            "start": 42,
            "end": 43
          }
        ],
        "declare": false,
        "start": 38,
        "end": 43
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 50
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "directive": null,
            "start": 58,
            "end": 60
          }
        ],
        "start": 52,
        "end": 62
      },
      "start": 33,
      "end": 62
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 62
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
    "value": "map",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 19,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 20,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 38,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 44,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  }
]
```
