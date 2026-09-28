__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "uncheckedObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 28
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 38,
                          "end": 46
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 38,
                          "end": 46
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 38,
                        "end": 46
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optional",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 52,
                          "end": 60
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 52,
                            "end": 60
                          },
                          "right": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 63,
                            "end": 68
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 52,
                          "end": 68
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 52,
                        "end": 68
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 71
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 74,
                    "end": 76
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 76
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 81,
                "end": 83
              },
              "id": null,
              "generator": false,
              "start": 31,
              "end": 83
            },
            "definite": false,
            "start": 13,
            "end": 83
          }
        ],
        "declare": false,
        "start": 7,
        "end": 84
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 84
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "uncheckedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 113
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "required",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 123,
                        "end": 131
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optional",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 137,
                          "end": 145
                        },
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 148,
                          "end": 153
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 153
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 156
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 159,
                    "end": 161
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 161
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 166,
                "end": 168
              },
              "id": null,
              "generator": false,
              "start": 116,
              "end": 168
            },
            "definite": false,
            "start": 99,
            "end": 168
          }
        ],
        "declare": false,
        "start": 93,
        "end": 169
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 86,
      "end": 169
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "uncheckedObject",
    "start": 13,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
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
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 38,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 52,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 63,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 86,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "uncheckedArray",
    "start": 99,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 123,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 137,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "checkedObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 39
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 49,
                          "end": 57
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 49,
                          "end": 57
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 49,
                        "end": 57
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optional",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 63,
                          "end": 71
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 63,
                            "end": 71
                          },
                          "right": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 74,
                            "end": 79
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 63,
                          "end": 79
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 63,
                        "end": 79
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 82
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 85,
                    "end": 87
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 87
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 92,
                "end": 94
              },
              "id": null,
              "generator": false,
              "start": 42,
              "end": 94
            },
            "definite": false,
            "start": 26,
            "end": 94
          }
        ],
        "declare": false,
        "start": 20,
        "end": 95
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 13,
      "end": 95
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "checkedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 122
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "required",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 132,
                        "end": 140
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optional",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 154
                        },
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 157,
                          "end": 162
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 162
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 165
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 168,
                    "end": 170
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 170
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 175,
                "end": 177
              },
              "id": null,
              "generator": false,
              "start": 125,
              "end": 177
            },
            "definite": false,
            "start": 110,
            "end": 177
          }
        ],
        "declare": false,
        "start": 104,
        "end": 178
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 97,
      "end": 178
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 13,
  "end": 179
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 13,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 20,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "checkedObject",
    "start": 26,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 63,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "=",
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
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
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
    "value": "export",
    "start": 97,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 104,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "checkedArray",
    "start": 110,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 132,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 146,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 155,
    "end": 156
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "checkedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "checkedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 21
          },
          "importKind": "value",
          "start": 9,
          "end": 21
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "checkedObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 36
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "checkedObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 36
          },
          "importKind": "value",
          "start": 23,
          "end": 36
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./checked",
        "raw": "\"./checked\"",
        "start": 44,
        "end": 55
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 56
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "uncheckedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 80
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "uncheckedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 80
          },
          "importKind": "value",
          "start": 66,
          "end": 80
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "uncheckedObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 97
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "uncheckedObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 97
          },
          "importKind": "value",
          "start": 82,
          "end": 97
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./unchecked",
        "raw": "\"./unchecked\"",
        "start": 105,
        "end": 118
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 57,
      "end": 119
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "typedObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 145
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 163
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 163
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 155,
                        "end": 163
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optional",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 177
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "optional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 169,
                            "end": 177
                          },
                          "right": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 180,
                            "end": 185
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 185
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 169,
                        "end": 185
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 188
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 191,
                    "end": 193
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 193
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 198,
                "end": 200
              },
              "id": null,
              "generator": false,
              "start": 148,
              "end": 200
            },
            "definite": false,
            "start": 134,
            "end": 200
          }
        ],
        "declare": false,
        "start": 128,
        "end": 201
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 121,
      "end": 201
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "typedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 226
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "required",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 236,
                        "end": 244
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "optional",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 258
                        },
                        "right": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 261,
                          "end": 266
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 250,
                        "end": 266
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 269
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 272,
                    "end": 274
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 274
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 279,
                "end": 281
              },
              "id": null,
              "generator": false,
              "start": 229,
              "end": 281
            },
            "definite": false,
            "start": 216,
            "end": 281
          }
        ],
        "declare": false,
        "start": 210,
        "end": 282
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 203,
      "end": 282
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "typedObjectRest",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 312
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 330
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 330
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 322,
                        "end": 330
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
                          "start": 339,
                          "end": 343
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 336,
                        "end": 343
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 345
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 348,
                    "end": 350
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 350
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 361,
                      "end": 365
                    },
                    "directive": null,
                    "start": 361,
                    "end": 366
                  }
                ],
                "start": 355,
                "end": 368
              },
              "id": null,
              "generator": false,
              "start": 315,
              "end": 368
            },
            "definite": false,
            "start": 297,
            "end": 368
          }
        ],
        "declare": false,
        "start": 291,
        "end": 369
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 284,
      "end": 369
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "uncheckedObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 386
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 397
                },
                "value": {
                  "type": "Literal",
                  "value": "value",
                  "raw": "\"value\"",
                  "start": 399,
                  "end": 406
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 389,
                "end": 406
              }
            ],
            "start": 387,
            "end": 408
          }
        ],
        "optional": false,
        "start": 371,
        "end": 409
      },
      "directive": null,
      "start": 371,
      "end": 410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "uncheckedArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 425
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "value",
                "raw": "\"value\"",
                "start": 427,
                "end": 434
              }
            ],
            "start": 426,
            "end": 435
          }
        ],
        "optional": false,
        "start": 411,
        "end": 436
      },
      "directive": null,
      "start": 411,
      "end": 437
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "checkedObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 451
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 462
                },
                "value": {
                  "type": "Literal",
                  "value": "value",
                  "raw": "\"value\"",
                  "start": 464,
                  "end": 471
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 454,
                "end": 471
              }
            ],
            "start": 452,
            "end": 473
          }
        ],
        "optional": false,
        "start": 438,
        "end": 474
      },
      "directive": null,
      "start": 438,
      "end": 475
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "checkedArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 476,
          "end": 488
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "value",
                "raw": "\"value\"",
                "start": 490,
                "end": 497
              }
            ],
            "start": 489,
            "end": 498
          }
        ],
        "optional": false,
        "start": 476,
        "end": 499
      },
      "directive": null,
      "start": 476,
      "end": 500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "typedObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 501,
          "end": 512
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 523
                },
                "value": {
                  "type": "Literal",
                  "value": "value",
                  "raw": "\"value\"",
                  "start": 525,
                  "end": 532
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 515,
                "end": 532
              }
            ],
            "start": 513,
            "end": 534
          }
        ],
        "optional": false,
        "start": 501,
        "end": 535
      },
      "directive": null,
      "start": 501,
      "end": 536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "typedArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 547
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "value",
                "raw": "\"value\"",
                "start": 549,
                "end": 556
              }
            ],
            "start": 548,
            "end": 557
          }
        ],
        "optional": false,
        "start": 537,
        "end": 558
      },
      "directive": null,
      "start": 537,
      "end": 559
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 559
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "checkedArray",
    "start": 9,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "checkedObject",
    "start": 23,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 39,
    "end": 43
  },
  {
    "type": "String",
    "value": "\"./checked\"",
    "start": 44,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "uncheckedArray",
    "start": 66,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "uncheckedObject",
    "start": 82,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 100,
    "end": 104
  },
  {
    "type": "String",
    "value": "\"./unchecked\"",
    "start": 105,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 128,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "typedObject",
    "start": 134,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 155,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 169,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 203,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 210,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "typedArray",
    "start": 216,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 236,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "optional",
    "start": 250,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 261,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
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
    "value": "export",
    "start": 284,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 291,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "typedObjectRest",
    "start": 297,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 322,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 336,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "uncheckedObject",
    "start": 371,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 389,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 399,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "uncheckedArray",
    "start": 411,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 426,
    "end": 427
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 427,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "checkedObject",
    "start": 438,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 454,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 464,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "checkedArray",
    "start": 476,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 489,
    "end": 490
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 490,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "typedObject",
    "start": 501,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "required",
    "start": 515,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 525,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "typedArray",
    "start": 537,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 549,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  }
]
```
