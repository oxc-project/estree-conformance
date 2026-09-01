__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
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
                            "type": "PropertyDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 76,
                              "end": 77
                            },
                            "typeAnnotation": null,
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 80,
                              "end": 81
                            },
                            "computed": false,
                            "static": true,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null,
                            "start": 69,
                            "end": 81
                          }
                        ],
                        "start": 67,
                        "end": 83
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 61,
                      "end": 83
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 85
                    },
                    "optional": false,
                    "computed": false,
                    "start": 61,
                    "end": 85
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 89
                    },
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 92,
                      "end": 94
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 94
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 60,
                  "end": 94
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 96
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 101,
            "end": 103
          },
          "id": null,
          "generator": false,
          "start": 57,
          "end": 103
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 56,
        "end": 106
      },
      "directive": null,
      "start": 56,
      "end": 107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 107
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 69,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 92,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  }
]
```
