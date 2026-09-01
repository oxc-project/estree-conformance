__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
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
            "name": "remove",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 24
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 24
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
                  "type": "ChainExpression",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 45,
                          "end": 49
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parentNode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 50,
                          "end": 60
                        },
                        "optional": false,
                        "computed": false,
                        "start": 45,
                        "end": 60
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "removeChild",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 73
                      },
                      "optional": true,
                      "computed": false,
                      "start": 45,
                      "end": 73
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ThisExpression",
                        "start": 74,
                        "end": 78
                      }
                    ],
                    "optional": false,
                    "start": 45,
                    "end": 79
                  },
                  "start": 45,
                  "end": 79
                },
                "directive": null,
                "start": 45,
                "end": 80
              }
            ],
            "start": 41,
            "end": 82
          },
          "expression": false,
          "start": 29,
          "end": 82
        },
        "start": 0,
        "end": 82
      },
      "directive": null,
      "start": 0,
      "end": 83
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 83
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Element",
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
    "value": "remove",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 25,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 29,
    "end": 37
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
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 45,
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
    "value": "parentNode",
    "start": 50,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "removeChild",
    "start": 62,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  }
]
```
