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
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 14
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 81
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 83
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
                              "start": 95,
                              "end": 99
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 100,
                              "end": 101
                            },
                            "optional": false,
                            "computed": false,
                            "start": 95,
                            "end": 101
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Literal",
                              "value": 12,
                              "raw": "12",
                              "start": 104,
                              "end": 106
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 109,
                              "end": 110
                            },
                            "start": 104,
                            "end": 110
                          },
                          "start": 95,
                          "end": 110
                        },
                        "directive": null,
                        "start": 95,
                        "end": 111
                      }
                    ],
                    "start": 85,
                    "end": 117
                  },
                  "expression": false,
                  "start": 81,
                  "end": 117
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 70,
                "end": 117
              }
            ],
            "start": 23,
            "end": 119
          },
          "abstract": false,
          "declare": false,
          "start": 17,
          "end": 119
        },
        "start": 0,
        "end": 119
      },
      "directive": null,
      "start": 0,
      "end": 119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 119
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 7,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 70,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  }
]
```
