__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AwaitExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 6,
          "end": 7
        },
        "start": 0,
        "end": 7
      },
      "directive": null,
      "start": 0,
      "end": 8
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 19
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 23,
                    "end": 30
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 38
                  },
                  "optional": false,
                  "computed": false,
                  "start": 23,
                  "end": 38
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 23,
                "end": 40
              }
            ],
            "start": 22,
            "end": 41
          },
          "definite": false,
          "start": 16,
          "end": 41
        }
      ],
      "declare": false,
      "start": 10,
      "end": 42
    },
    {
      "type": "ForOfStatement",
      "await": true,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 65
            },
            "init": null,
            "definite": false,
            "start": 61,
            "end": 65
          }
        ],
        "declare": false,
        "start": 55,
        "end": 65
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "arr",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 72
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 82
            },
            "directive": null,
            "start": 78,
            "end": 83
          }
        ],
        "start": 74,
        "end": 85
      },
      "start": 44,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "await",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7,
    "end": 8
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 10,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 31,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 55,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 61,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 66,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  }
]
```
