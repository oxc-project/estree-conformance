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
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 20
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 20
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 23,
          "end": 32
        },
        "start": 0,
        "end": 32
      },
      "directive": null,
      "start": 0,
      "end": 33
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 44
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 47,
        "end": 50
      },
      "expression": false,
      "start": 34,
      "end": 50
    },
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
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 57
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 65
            },
            "optional": false,
            "computed": false,
            "start": 51,
            "end": 65
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 71
          },
          "optional": false,
          "computed": false,
          "start": 51,
          "end": 71
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 75
        },
        "start": 51,
        "end": 75
      },
      "directive": null,
      "start": 51,
      "end": 76
    },
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
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 83
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 91
            },
            "optional": false,
            "computed": false,
            "start": 77,
            "end": 91
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 97
          },
          "optional": false,
          "computed": false,
          "start": 77,
          "end": 97
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 101
        },
        "start": 77,
        "end": 101
      },
      "directive": null,
      "start": 77,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 109
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 117
            },
            "optional": false,
            "computed": false,
            "start": 103,
            "end": 117
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 123
          },
          "optional": false,
          "computed": false,
          "start": 103,
          "end": 123
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 103,
        "end": 125
      },
      "directive": null,
      "start": 103,
      "end": 125
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 126
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
    "value": ".",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 23,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 34,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 77,
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
    "value": "exports",
    "start": 84,
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
    "value": "apply",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 110,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
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
                  "name": "apply",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 13
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "apply",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 13
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 8,
                "end": 13
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 15
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 25
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./moduleExportAliasDuplicateAlias",
                "raw": "'./moduleExportAliasDuplicateAlias'",
                "start": 26,
                "end": 61
              }
            ],
            "optional": false,
            "start": 18,
            "end": 62
          },
          "definite": false,
          "start": 6,
          "end": 62
        }
      ],
      "declare": false,
      "start": 0,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "apply",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 68
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 63,
        "end": 70
      },
      "directive": null,
      "start": 63,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 70
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
    "value": "apply",
    "start": 8,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "'./moduleExportAliasDuplicateAlias'",
    "start": 26,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 63,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  }
]
```
