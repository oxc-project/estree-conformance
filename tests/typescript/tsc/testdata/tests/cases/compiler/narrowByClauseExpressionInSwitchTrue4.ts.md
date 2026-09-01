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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 17,
                      "end": 20
                    },
                    "start": 17,
                    "end": 20
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 23,
                      "end": 26
                    },
                    "start": 23,
                    "end": 26
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "'c'",
                      "start": 29,
                      "end": 32
                    },
                    "start": 29,
                    "end": 32
                  }
                ],
                "start": 17,
                "end": 32
              },
              "start": 15,
              "end": 32
            },
            "start": 14,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 32
        }
      ],
      "declare": true,
      "start": 0,
      "end": 33
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 43,
        "end": 47
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 64,
              "end": 67
            },
            "start": 58,
            "end": 67
          },
          "consequent": [],
          "start": 53,
          "end": 68
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "directive": null,
              "start": 84,
              "end": 86
            }
          ],
          "start": 71,
          "end": 86
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 100,
              "end": 103
            },
            "start": 94,
            "end": 103
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "directive": null,
              "start": 109,
              "end": 111
            }
          ],
          "start": 89,
          "end": 111
        }
      ],
      "start": 35,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 113
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 21,
    "end": 22
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 27,
    "end": 28
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 53,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 60,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 89,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 96,
    "end": 99
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  }
]
```
