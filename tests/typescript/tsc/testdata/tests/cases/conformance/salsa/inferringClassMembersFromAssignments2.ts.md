__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "OOOrder",
              "optional": false,
              "typeAnnotation": null,
              "start": 0,
              "end": 7
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 17
            },
            "optional": false,
            "computed": false,
            "start": 0,
            "end": 17
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 19
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
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
                      "start": 40,
                      "end": 44
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 45,
                      "end": 46
                    },
                    "optional": false,
                    "computed": false,
                    "start": 40,
                    "end": 46
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 49,
                    "end": 50
                  },
                  "start": 40,
                  "end": 50
                },
                "directive": null,
                "start": 40,
                "end": 50
              }
            ],
            "start": 34,
            "end": 52
          },
          "expression": false,
          "start": 22,
          "end": 52
        },
        "start": 0,
        "end": 52
      },
      "directive": null,
      "start": 0,
      "end": 52
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OOOrder",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 69
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "start": 78,
                  "end": 82
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "optional": false,
                "computed": false,
                "start": 78,
                "end": 84
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 87,
                "end": 88
              },
              "start": 78,
              "end": 88
            },
            "directive": null,
            "start": 78,
            "end": 88
          }
        ],
        "start": 72,
        "end": 90
      },
      "expression": false,
      "start": 53,
      "end": 90
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "OOOrder",
    "start": 0,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 8,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 22,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 53,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "OOOrder",
    "start": 62,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  }
]
```
