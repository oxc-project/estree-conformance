__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Decoder",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "remaining",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 29
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 32,
              "end": 33
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 20,
            "end": 34
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "consume",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 46
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
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 53,
                      "end": 59
                    },
                    "start": 51,
                    "end": 59
                  },
                  "start": 47,
                  "end": 59
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 75,
                            "end": 79
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "remaining",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 80,
                            "end": 89
                          },
                          "optional": false,
                          "computed": false,
                          "start": 75,
                          "end": 89
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 94,
                          "end": 95
                        },
                        "start": 75,
                        "end": 95
                      },
                      "operator": "||",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 103
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 108,
                          "end": 109
                        },
                        "start": 99,
                        "end": 109
                      },
                      "start": 75,
                      "end": 109
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": null,
                      "start": 111,
                      "end": 118
                    },
                    "alternate": null,
                    "start": 71,
                    "end": 118
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 127,
                          "end": 131
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "remaining",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 141
                        },
                        "optional": false,
                        "computed": false,
                        "start": 127,
                        "end": 141
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "size",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 149
                      },
                      "start": 127,
                      "end": 149
                    },
                    "directive": null,
                    "start": 127,
                    "end": 150
                  }
                ],
                "start": 61,
                "end": 156
              },
              "expression": false,
              "start": 46,
              "end": 156
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 39,
            "end": 156
          }
        ],
        "start": 14,
        "end": 158
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 158
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 158
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Decoder",
    "start": 6,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "remaining",
    "start": 20,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "remaining",
    "start": 80,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 90,
    "end": 93
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 96,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 104,
    "end": 107
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "remaining",
    "start": 132,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 142,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  }
]
```
