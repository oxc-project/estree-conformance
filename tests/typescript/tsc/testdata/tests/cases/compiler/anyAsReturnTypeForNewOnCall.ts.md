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
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
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
          "typeAnnotation": null,
          "start": 15,
          "end": 16
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 19
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 25,
                  "end": 29
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 31
                },
                "optional": false,
                "computed": false,
                "start": 25,
                "end": 31
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "start": 25,
              "end": 35
            },
            "directive": null,
            "start": 25,
            "end": 36
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 39,
                  "end": 43
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 45
                },
                "optional": false,
                "computed": false,
                "start": 39,
                "end": 45
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "start": 39,
              "end": 49
            },
            "directive": null,
            "start": 39,
            "end": 50
          }
        ],
        "start": 21,
        "end": 53
      },
      "expression": false,
      "start": 0,
      "end": 53
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 60
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 72
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 73,
                "end": 74
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 76,
                "end": 77
              }
            ],
            "start": 63,
            "end": 78
          },
          "definite": false,
          "start": 59,
          "end": 78
        }
      ],
      "declare": false,
      "start": 55,
      "end": 79
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 87
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "optional": false,
            "computed": false,
            "start": 90,
            "end": 93
          },
          "definite": false,
          "start": 85,
          "end": 93
        }
      ],
      "declare": false,
      "start": 81,
      "end": 94
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  }
]
```
