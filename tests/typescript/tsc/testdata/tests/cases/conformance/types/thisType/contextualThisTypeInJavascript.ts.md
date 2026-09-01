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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
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
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 22
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 24,
                  "end": 25
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 18,
                "end": 25
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 37
                },
                "value": {
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
                          "type": "ThisExpression",
                          "start": 50,
                          "end": 54
                        },
                        "directive": null,
                        "start": 50,
                        "end": 55
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 64,
                            "end": 68
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 69,
                            "end": 73
                          },
                          "optional": false,
                          "computed": false,
                          "start": 64,
                          "end": 73
                        },
                        "directive": null,
                        "start": 64,
                        "end": 74
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 83,
                            "end": 87
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "method",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 88,
                            "end": 94
                          },
                          "optional": false,
                          "computed": false,
                          "start": 83,
                          "end": 94
                        },
                        "directive": null,
                        "start": 83,
                        "end": 95
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 104,
                            "end": 108
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "unknown",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 116
                          },
                          "optional": false,
                          "computed": false,
                          "start": 104,
                          "end": 116
                        },
                        "directive": null,
                        "start": 104,
                        "end": 117
                      }
                    ],
                    "start": 40,
                    "end": 155
                  },
                  "expression": false,
                  "start": 37,
                  "end": 155
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 31,
                "end": 155
              }
            ],
            "start": 12,
            "end": 157
          },
          "definite": false,
          "start": 6,
          "end": 157
        }
      ],
      "declare": false,
      "start": 0,
      "end": 157
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 157
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 69,
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
    "value": "this",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  }
]
```
