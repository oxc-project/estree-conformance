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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 13
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 13
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 16,
          "end": 19
        },
        "start": 0,
        "end": 19
      },
      "directive": null,
      "start": 0,
      "end": 20
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 28
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 33
          },
          "optional": false,
          "computed": false,
          "start": 21,
          "end": 33
        },
        "right": {
          "type": "Literal",
          "value": "text",
          "raw": "\"text\"",
          "start": 36,
          "end": 42
        },
        "start": 21,
        "end": 42
      },
      "directive": null,
      "start": 21,
      "end": 43
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 51
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 57
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 57
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 60,
          "end": 64
        },
        "start": 44,
        "end": 64
      },
      "directive": null,
      "start": 44,
      "end": 65
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 73
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nested",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 80
          },
          "optional": false,
          "computed": false,
          "start": 66,
          "end": 80
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 90
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 92,
                "end": 93
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 85,
              "end": 93
            }
          ],
          "start": 83,
          "end": 95
        },
        "start": 66,
        "end": 95
      },
      "directive": null,
      "start": 66,
      "end": 96
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 106
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 117,
              "end": 118
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 113,
            "end": 119
          }
        ],
        "start": 107,
        "end": 121
      },
      "abstract": false,
      "declare": false,
      "start": 97,
      "end": 121
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 129
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 133
          },
          "optional": false,
          "computed": false,
          "start": 122,
          "end": 133
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 139
        },
        "start": 122,
        "end": 139
      },
      "directive": null,
      "start": 122,
      "end": 140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 141
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "exports",
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
    "value": "value",
    "start": 8,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "String",
    "value": "\"text\"",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 44,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
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
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": "value",
            "raw": "\"value\"",
            "start": 12,
            "end": 19
          },
          "definite": false,
          "start": 6,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    },
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 32
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dynamic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 42
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 28,
                "end": 42
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "text",
                  "raw": "\"text\"",
                  "start": 45,
                  "end": 51
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 58
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 44,
                "end": 58
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 65
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 65
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 65
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 73
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 81
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 81
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 76,
                      "end": 81
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 82
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 67,
                "end": 82
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 91
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 84,
                "end": 91
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 92
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./a",
                "raw": "\"./a\"",
                "start": 103,
                "end": 108
              }
            ],
            "optional": false,
            "start": 95,
            "end": 109
          },
          "definite": false,
          "start": 27,
          "end": 109
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sibling",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 122
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 132
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./a",
                "raw": "\"./a\"",
                "start": 133,
                "end": 138
              }
            ],
            "optional": false,
            "start": 125,
            "end": 139
          },
          "definite": false,
          "start": 115,
          "end": 139
        }
      ],
      "declare": false,
      "start": 21,
      "end": 140
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 148
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "dynamic",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 156
          },
          "optional": false,
          "computed": false,
          "start": 141,
          "end": 156
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "dynamic",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 166
        },
        "start": 141,
        "end": 166
      },
      "directive": null,
      "start": 141,
      "end": 167
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 175
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 180
          },
          "optional": false,
          "computed": false,
          "start": 168,
          "end": 180
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "text",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 187
        },
        "start": 168,
        "end": 187
      },
      "directive": null,
      "start": 168,
      "end": 188
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 196
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 202
          },
          "optional": false,
          "computed": false,
          "start": 189,
          "end": 202
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "other",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 210
        },
        "start": 189,
        "end": 210
      },
      "directive": null,
      "start": 189,
      "end": 211
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 225
          },
          "optional": false,
          "computed": false,
          "start": 212,
          "end": 225
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 233
        },
        "start": 212,
        "end": 233
      },
      "directive": null,
      "start": 212,
      "end": 234
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 242
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 247
          },
          "optional": false,
          "computed": false,
          "start": 235,
          "end": 247
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "rest",
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 254
        },
        "start": 235,
        "end": 254
      },
      "directive": null,
      "start": 235,
      "end": 255
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 263
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sibling",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 271
          },
          "optional": false,
          "computed": false,
          "start": 256,
          "end": 271
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sibling",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 281
        },
        "start": 256,
        "end": 281
      },
      "directive": null,
      "start": 256,
      "end": 282
    },
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 295
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extra",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 303
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 291,
                "end": 303
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 308
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 308
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 305,
                "end": 308
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 309
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 319
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./a",
                "raw": "\"./a\"",
                "start": 320,
                "end": 325
              }
            ],
            "optional": false,
            "start": 312,
            "end": 326
          },
          "definite": false,
          "start": 290,
          "end": 326
        }
      ],
      "declare": false,
      "start": 284,
      "end": 327
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 365
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 367
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 369,
        "end": 371
      },
      "expression": false,
      "start": 350,
      "end": 371
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 379
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 383
          },
          "optional": false,
          "computed": false,
          "start": 372,
          "end": 383
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 389
        },
        "start": 372,
        "end": 389
      },
      "directive": null,
      "start": 372,
      "end": 390
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 398
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extra",
            "optional": false,
            "typeAnnotation": null,
            "start": 399,
            "end": 404
          },
          "optional": false,
          "computed": false,
          "start": 391,
          "end": 404
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "extra",
          "optional": false,
          "typeAnnotation": null,
          "start": 407,
          "end": 412
        },
        "start": 391,
        "end": 412
      },
      "directive": null,
      "start": 391,
      "end": 413
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 421
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "useObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 428
          },
          "optional": false,
          "computed": false,
          "start": 414,
          "end": 428
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "useObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 437
        },
        "start": 414,
        "end": 437
      },
      "directive": null,
      "start": 414,
      "end": 438
    },
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 451
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unusedDynamic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 467
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 447,
                "end": 467
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 473
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unusedText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 485
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 469,
                "end": 485
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 486
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 496
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./a",
                "raw": "\"./a\"",
                "start": 497,
                "end": 502
              }
            ],
            "optional": false,
            "start": 489,
            "end": 503
          },
          "definite": false,
          "start": 446,
          "end": 503
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "keep",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 509
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 512,
            "end": 513
          },
          "definite": false,
          "start": 505,
          "end": 513
        }
      ],
      "declare": false,
      "start": 440,
      "end": 514
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 522
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "keep",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 527
          },
          "optional": false,
          "computed": false,
          "start": 515,
          "end": 527
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "keep",
          "optional": false,
          "typeAnnotation": null,
          "start": 530,
          "end": 534
        },
        "start": 515,
        "end": 534
      },
      "directive": null,
      "start": 515,
      "end": 535
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 535
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
    "value": "key",
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
    "type": "String",
    "value": "\"value\"",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "dynamic",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "String",
    "value": "\"text\"",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 60,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 76,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "sibling",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "dynamic",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "dynamic",
    "start": 159,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 176,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 189,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 197,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 212,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 220,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 228,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "sibling",
    "start": 264,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "sibling",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 312,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 320,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 350,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "useObj",
    "start": 359,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 372,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 386,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 391,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 399,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 407,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 414,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "useObj",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "useObj",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 440,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "unusedDynamic",
    "start": 454,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "unusedText",
    "start": 475,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 489,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 497,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "keep",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 515,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "keep",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "keep",
    "start": 530,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535
  }
]
```
