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
            "name": "hardline",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 54
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 63
                },
                "value": {
                  "type": "Literal",
                  "value": "hard",
                  "raw": "\"hard\"",
                  "start": 65,
                  "end": 71
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 59,
                "end": 71
              }
            ],
            "start": 57,
            "end": 73
          },
          "definite": false,
          "start": 46,
          "end": 73
        }
      ],
      "declare": false,
      "start": 40,
      "end": 73
    },
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
            "start": 74,
            "end": 80
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 88
          },
          "optional": false,
          "computed": false,
          "start": 74,
          "end": 88
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "hardline",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 103
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "hardline",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 103
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 95,
              "end": 103
            }
          ],
          "start": 91,
          "end": 105
        },
        "start": 74,
        "end": 105
      },
      "directive": null,
      "start": 74,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 40,
  "end": 107
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "hardline",
    "start": 46,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"hard\"",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "hardline",
    "start": 95,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  }
]
```
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
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 27
              },
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 36
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "./first",
                    "raw": "'./first'",
                    "start": 37,
                    "end": 46
                  }
                ],
                "optional": false,
                "start": 29,
                "end": 47
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 21,
              "end": 47
            }
          ],
          "start": 17,
          "end": 49
        },
        "start": 0,
        "end": 49
      },
      "directive": null,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 51
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
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "String",
    "value": "'./first'",
    "start": 37,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  }
]
```
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
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hardline",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 16
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hardline",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 16
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 8,
                "end": 16
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 18
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 28
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "./second",
                  "raw": "'./second'",
                  "start": 29,
                  "end": 39
                }
              ],
              "optional": false,
              "start": 21,
              "end": 40
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 47
            },
            "optional": false,
            "computed": false,
            "start": 21,
            "end": 47
          },
          "definite": false,
          "start": 6,
          "end": 47
        }
      ],
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "hardline",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 57
      },
      "directive": null,
      "start": 49,
      "end": 57
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 57
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
    "type": "Punctuator",
    "value": "{",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "hardline",
    "start": 8,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "String",
    "value": "'./second'",
    "start": 29,
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
    "value": ".",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "hardline",
    "start": 49,
    "end": 57
  }
]
```
