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
            "name": "as",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "Literal",
            "value": 43,
            "raw": "43",
            "start": 9,
            "end": 11
          },
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 34,
              "end": 40
            },
            "start": 21,
            "end": 40
          },
          "definite": false,
          "start": 17,
          "end": 40
        }
      ],
      "declare": false,
      "start": 13,
      "end": 41
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 51,
                "end": 55
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              },
              "start": 51,
              "end": 65
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 73
            },
            "optional": false,
            "computed": false,
            "start": 50,
            "end": 73
          },
          "definite": false,
          "start": 46,
          "end": 73
        }
      ],
      "declare": false,
      "start": 42,
      "end": 74
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 87
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 91,
                "end": 94
              },
              "start": 83,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 98,
              "end": 104
            },
            "start": 83,
            "end": 104
          },
          "definite": false,
          "start": 79,
          "end": 104
        }
      ],
      "declare": false,
      "start": 75,
      "end": 105
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": 32,
              "raw": "32",
              "start": 198,
              "end": 200
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 204,
                  "end": 210
                },
                {
                  "type": "TSStringKeyword",
                  "start": 211,
                  "end": 217
                }
              ],
              "start": 204,
              "end": 217
            },
            "start": 198,
            "end": 217
          },
          "definite": false,
          "start": 194,
          "end": 217
        }
      ],
      "declare": false,
      "start": 190,
      "end": 218
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 220
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 223,
          "end": 225
        },
        "start": 219,
        "end": 225
      },
      "directive": null,
      "start": 219,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 226
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
    "value": "as",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Numeric",
    "value": "43",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 31,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Null",
    "value": "null",
    "start": 51,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 56,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 83,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 88,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 198,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 201,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 204,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "String",
    "value": "''",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  }
]
```
