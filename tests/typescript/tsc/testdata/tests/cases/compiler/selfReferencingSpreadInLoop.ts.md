__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "additional",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 14
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 17,
            "end": 19
          },
          "definite": false,
          "start": 4,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "subcomponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 44
            },
            "init": null,
            "definite": false,
            "start": 32,
            "end": 44
          }
        ],
        "declare": false,
        "start": 26,
        "end": 44
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 49,
            "end": 50
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 52,
            "end": 53
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 55,
            "end": 56
          }
        ],
        "start": 48,
        "end": 57
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "additional",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 75
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "additional",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 92
                    },
                    "start": 79,
                    "end": 92
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subcomponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 106
                  }
                ],
                "start": 78,
                "end": 107
              },
              "start": 65,
              "end": 107
            },
            "directive": null,
            "start": 65,
            "end": 108
          }
        ],
        "start": 59,
        "end": 110
      },
      "start": 21,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 110
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "additional",
    "start": 4,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "subcomponent",
    "start": 32,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 50,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "additional",
    "start": 65,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 79,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "additional",
    "start": 82,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "subcomponent",
    "start": 94,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  }
]
```
