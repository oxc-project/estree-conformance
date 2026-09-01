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
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 37
            },
            "init": null,
            "definite": false,
            "start": 35,
            "end": 37
          }
        ],
        "declare": false,
        "start": 31,
        "end": 37
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 41,
        "end": 43
      },
      "body": {
        "type": "ForOfStatement",
        "await": false,
        "left": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 60
              },
              "init": null,
              "definite": false,
              "start": 58,
              "end": 60
            }
          ],
          "declare": false,
          "start": 54,
          "end": 60
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 66
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 76
          },
          "optional": false,
          "computed": false,
          "start": 64,
          "end": 76
        },
        "body": {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 97
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 106
                },
                "id": null,
                "generator": false,
                "start": 98,
                "end": 106
              }
            ],
            "optional": false,
            "start": 86,
            "end": 107
          },
          "directive": null,
          "start": 86,
          "end": 108
        },
        "start": 49,
        "end": 108
      },
      "start": 26,
      "end": 108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 108
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
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 12,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 35,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 54,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 58,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 61,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 64,
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
    "value": "someArray",
    "start": 67,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 86,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 101,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 104,
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
    "value": ";",
    "start": 107,
    "end": 108
  }
]
```
