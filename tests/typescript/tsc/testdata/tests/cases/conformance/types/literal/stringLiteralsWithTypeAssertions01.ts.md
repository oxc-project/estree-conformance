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
            "name": "fooOrBar",
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
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 14,
                      "end": 19
                    },
                    "start": 14,
                    "end": 19
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 22,
                      "end": 27
                    },
                    "start": 22,
                    "end": 27
                  }
                ],
                "start": 14,
                "end": 27
              },
              "start": 12,
              "end": 27
            },
            "start": 4,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 38,
              "end": 43
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 47,
                "end": 52
              },
              "start": 47,
              "end": 52
            },
            "start": 38,
            "end": 52
          },
          "definite": false,
          "start": 34,
          "end": 52
        }
      ],
      "declare": false,
      "start": 30,
      "end": 53
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 59
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 62,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 71,
                "end": 76
              },
              "start": 71,
              "end": 76
            },
            "start": 62,
            "end": 76
          },
          "definite": false,
          "start": 58,
          "end": 76
        }
      ],
      "declare": false,
      "start": 54,
      "end": 77
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 83
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooOrBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 98,
                "end": 103
              },
              "start": 98,
              "end": 103
            },
            "start": 86,
            "end": 103
          },
          "definite": false,
          "start": 82,
          "end": 103
        }
      ],
      "declare": false,
      "start": 78,
      "end": 104
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 110
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooOrBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 121
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 125,
                "end": 130
              },
              "start": 125,
              "end": 130
            },
            "start": 113,
            "end": 130
          },
          "definite": false,
          "start": 109,
          "end": 130
        }
      ],
      "declare": false,
      "start": 105,
      "end": 131
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooOrBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 148
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 152,
                "end": 157
              },
              "start": 152,
              "end": 157
            },
            "start": 140,
            "end": 157
          },
          "definite": false,
          "start": 136,
          "end": 157
        }
      ],
      "declare": false,
      "start": 132,
      "end": 158
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 164
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 167,
              "end": 172
            },
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooOrBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 191
              },
              "typeArguments": null,
              "start": 176,
              "end": 191
            },
            "start": 167,
            "end": 191
          },
          "definite": false,
          "start": 163,
          "end": 191
        }
      ],
      "declare": false,
      "start": 159,
      "end": 192
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 192
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
    "value": "fooOrBar",
    "start": 4,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 20,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 38,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 44,
    "end": 46
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 47,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 68,
    "end": 70
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 78,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "fooOrBar",
    "start": 86,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 95,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "fooOrBar",
    "start": 113,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 122,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "fooOrBar",
    "start": 140,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 149,
    "end": 151
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 167,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 173,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 176,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "fooOrBar",
    "start": 183,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  }
]
```
