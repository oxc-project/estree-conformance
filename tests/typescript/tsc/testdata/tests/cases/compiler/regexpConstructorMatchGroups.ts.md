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
            "name": "pattern",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "start": 14,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 29
        }
      ],
      "declare": true,
      "start": 0,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "matches",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 44
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 47,
                "end": 49
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 55
              },
              "optional": false,
              "computed": false,
              "start": 47,
              "end": 55
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 66
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pattern",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 74
                  }
                ],
                "start": 56,
                "end": 75
              }
            ],
            "optional": false,
            "start": 47,
            "end": 76
          },
          "definite": false,
          "start": 37,
          "end": 76
        }
      ],
      "declare": false,
      "start": 31,
      "end": 77
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "matches",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 89
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "matches",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 98
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "groups",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 105
          },
          "optional": false,
          "computed": false,
          "start": 91,
          "end": 105
        },
        "directive": null,
        "start": 91,
        "end": 106
      },
      "alternate": null,
      "start": 78,
      "end": 106
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 106
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
    "value": "pattern",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "pattern",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
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
    "value": "if",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "groups",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  }
]
```
