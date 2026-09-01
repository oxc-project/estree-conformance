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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 11
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 13,
                  "end": 14
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 10,
                "end": 14
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 19,
                  "end": 20
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 20
              }
            ],
            "start": 8,
            "end": 22
          },
          "definite": false,
          "start": 4,
          "end": 22
        }
      ],
      "declare": false,
      "start": 0,
      "end": 23
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "init": null,
            "definite": false,
            "start": 34,
            "end": 35
          }
        ],
        "declare": false,
        "start": 30,
        "end": 35
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 45
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 52
          },
          "optional": false,
          "computed": false,
          "start": 39,
          "end": 52
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 54
          }
        ],
        "optional": false,
        "start": 39,
        "end": 55
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 68
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "definite": false,
                "start": 67,
                "end": 72
              }
            ],
            "declare": false,
            "start": 63,
            "end": 73
          }
        ],
        "start": 57,
        "end": 75
      },
      "start": 25,
      "end": 75
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
            "name": "entries",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 88
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 97
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 105
              },
              "optional": false,
              "computed": false,
              "start": 91,
              "end": 105
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              }
            ],
            "optional": false,
            "start": 91,
            "end": 108
          },
          "definite": false,
          "start": 81,
          "end": 108
        }
      ],
      "declare": false,
      "start": 77,
      "end": 109
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 109
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
    "value": "o",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 36,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 77,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 98,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  }
]
```
