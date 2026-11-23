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
  "start": 0,
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
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 642,
        "end": 645
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "input",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 659,
                      "end": 660
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 663,
                        "end": 669
                      },
                      "start": 661,
                      "end": 669
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 659,
                    "end": 670
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 672
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 675,
                        "end": 681
                      },
                      "start": 673,
                      "end": 681
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 671,
                    "end": 681
                  }
                ],
                "start": 657,
                "end": 683
              },
              "start": 655,
              "end": 683
            },
            "start": 649,
            "end": 683
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 688,
            "end": 694
          },
          "start": 685,
          "end": 694
        },
        "start": 648,
        "end": 694
      },
      "declare": false,
      "start": 637,
      "end": 695
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
              "name": "obj1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 718
                  },
                  "typeArguments": null,
                  "start": 715,
                  "end": 718
                },
                "start": 713,
                "end": 718
              },
              "start": 709,
              "end": 718
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 724,
                          "end": 725
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 724,
                          "end": 725
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 724,
                        "end": 725
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 727,
                          "end": 728
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 727,
                          "end": 728
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 727,
                        "end": 728
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 730
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 733,
                    "end": 735
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 735
                }
              ],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 741,
                    "end": 742
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 745,
                    "end": 746
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 749,
                    "end": 750
                  },
                  "start": 741,
                  "end": 750
                },
                "operator": "+",
                "right": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 756
                  },
                  "operator": "??",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 760,
                    "end": 761
                  },
                  "start": 755,
                  "end": 761
                },
                "start": 740,
                "end": 762
              },
              "id": null,
              "generator": false,
              "start": 721,
              "end": 762
            },
            "definite": false,
            "start": 709,
            "end": 762
          }
        ],
        "declare": false,
        "start": 703,
        "end": 763
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 696,
      "end": 763
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Arr",
        "optional": false,
        "typeAnnotation": null,
        "start": 770,
        "end": 773
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "input",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 786,
                      "end": 792
                    },
                    "start": 786,
                    "end": 793
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 795,
                      "end": 801
                    },
                    "start": 795,
                    "end": 802
                  }
                ],
                "start": 785,
                "end": 803
              },
              "start": 783,
              "end": 803
            },
            "start": 777,
            "end": 803
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 808,
            "end": 814
          },
          "start": 805,
          "end": 814
        },
        "start": 776,
        "end": 814
      },
      "declare": false,
      "start": 765,
      "end": 815
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
              "name": "arr1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 835,
                    "end": 838
                  },
                  "typeArguments": null,
                  "start": 835,
                  "end": 838
                },
                "start": 833,
                "end": 838
              },
              "start": 829,
              "end": 838
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 843,
                        "end": 844
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 846,
                        "end": 847
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 848
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 851,
                    "end": 853
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 853
                }
              ],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 859,
                    "end": 860
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 863,
                    "end": 864
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 867,
                    "end": 868
                  },
                  "start": 859,
                  "end": 868
                },
                "operator": "+",
                "right": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 873,
                    "end": 874
                  },
                  "operator": "??",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 878,
                    "end": 879
                  },
                  "start": 873,
                  "end": 879
                },
                "start": 858,
                "end": 880
              },
              "id": null,
              "generator": false,
              "start": 841,
              "end": 880
            },
            "definite": false,
            "start": 829,
            "end": 880
          }
        ],
        "declare": false,
        "start": 823,
        "end": 881
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 816,
      "end": 881
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
              "name": "arr2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSOptionalType",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 911,
                                "end": 917
                              },
                              "start": 911,
                              "end": 918
                            },
                            {
                              "type": "TSOptionalType",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 920,
                                "end": 926
                              },
                              "start": 920,
                              "end": 927
                            }
                          ],
                          "start": 910,
                          "end": 928
                        },
                        "start": 908,
                        "end": 928
                      },
                      "start": 903,
                      "end": 928
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 933,
                      "end": 939
                    },
                    "start": 930,
                    "end": 939
                  },
                  "start": 902,
                  "end": 939
                },
                "start": 900,
                "end": 939
              },
              "start": 896,
              "end": 939
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 944,
                        "end": 945
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 947,
                        "end": 948
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 943,
                    "end": 949
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 952,
                    "end": 954
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 943,
                  "end": 954
                }
              ],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 960,
                    "end": 961
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 964,
                    "end": 965
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 968,
                    "end": 969
                  },
                  "start": 960,
                  "end": 969
                },
                "operator": "+",
                "right": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 974,
                    "end": 975
                  },
                  "operator": "??",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 979,
                    "end": 980
                  },
                  "start": 974,
                  "end": 980
                },
                "start": 959,
                "end": 981
              },
              "id": null,
              "generator": false,
              "start": 942,
              "end": 981
            },
            "definite": false,
            "start": 896,
            "end": 981
          }
        ],
        "declare": false,
        "start": 890,
        "end": 982
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 883,
      "end": 982
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeArr",
        "optional": false,
        "typeAnnotation": null,
        "start": 1001,
        "end": 1008
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1019,
                "end": 1022
              },
              "typeArguments": null,
              "start": 1019,
              "end": 1022
            },
            "start": 1017,
            "end": 1022
          },
          "start": 1009,
          "end": 1022
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1025,
          "end": 1029
        },
        "start": 1023,
        "end": 1029
      },
      "body": null,
      "expression": false,
      "start": 984,
      "end": 1030
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeArr",
          "optional": false,
          "typeAnnotation": null,
          "start": 1031,
          "end": 1038
        },
        "typeArguments": null,
        "arguments": [
          {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1041,
                      "end": 1042
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1044,
                      "end": 1045
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1040,
                  "end": 1046
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1049,
                  "end": 1051
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1040,
                "end": 1051
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1071,
                            "end": 1077
                          },
                          "start": 1069,
                          "end": 1077
                        },
                        "start": 1068,
                        "end": 1077
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1080,
                        "end": 1081
                      },
                      "definite": false,
                      "start": 1068,
                      "end": 1081
                    }
                  ],
                  "declare": false,
                  "start": 1062,
                  "end": 1082
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1096,
                            "end": 1102
                          },
                          "start": 1094,
                          "end": 1102
                        },
                        "start": 1093,
                        "end": 1102
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1105,
                        "end": 1106
                      },
                      "definite": false,
                      "start": 1093,
                      "end": 1106
                    }
                  ],
                  "declare": false,
                  "start": 1087,
                  "end": 1107
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1119,
                    "end": 1120
                  },
                  "start": 1112,
                  "end": 1121
                }
              ],
              "start": 1056,
              "end": 1123
            },
            "id": null,
            "generator": false,
            "start": 1039,
            "end": 1123
          }
        ],
        "optional": false,
        "start": 1031,
        "end": 1124
      },
      "directive": null,
      "start": 1031,
      "end": 1125
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
              "name": "arr3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSOptionalType",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1158,
                                      "end": 1159
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1162,
                                        "end": 1168
                                      },
                                      "start": 1160,
                                      "end": 1168
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 1158,
                                    "end": 1168
                                  }
                                ],
                                "start": 1156,
                                "end": 1170
                              },
                              "start": 1156,
                              "end": 1171
                            }
                          ],
                          "start": 1155,
                          "end": 1172
                        },
                        "start": 1153,
                        "end": 1172
                      },
                      "start": 1147,
                      "end": 1172
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1177,
                      "end": 1181
                    },
                    "start": 1174,
                    "end": 1181
                  },
                  "start": 1146,
                  "end": 1181
                },
                "start": 1144,
                "end": 1181
              },
              "start": 1140,
              "end": 1181
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1188,
                                "end": 1189
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1188,
                                "end": 1189
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 1188,
                              "end": 1189
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1186,
                          "end": 1191
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 1194,
                          "end": 1196
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1186,
                        "end": 1196
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1185,
                    "end": 1197
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 1200,
                    "end": 1202
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1185,
                  "end": 1202
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1222,
                              "end": 1228
                            },
                            "start": 1220,
                            "end": 1228
                          },
                          "start": 1219,
                          "end": 1228
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1231,
                          "end": 1232
                        },
                        "definite": false,
                        "start": 1219,
                        "end": 1232
                      }
                    ],
                    "declare": false,
                    "start": 1213,
                    "end": 1233
                  }
                ],
                "start": 1207,
                "end": 1235
              },
              "id": null,
              "generator": false,
              "start": 1184,
              "end": 1235
            },
            "definite": false,
            "start": 1140,
            "end": 1235
          }
        ],
        "declare": false,
        "start": 1134,
        "end": 1236
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1127,
      "end": 1236
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
              "name": "arr4",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1268,
                                  "end": 1269
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1272,
                                    "end": 1278
                                  },
                                  "start": 1270,
                                  "end": 1278
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1268,
                                "end": 1278
                              }
                            ],
                            "start": 1266,
                            "end": 1280
                          },
                          "start": 1266,
                          "end": 1282
                        },
                        "start": 1264,
                        "end": 1282
                      },
                      "start": 1258,
                      "end": 1282
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1287,
                      "end": 1291
                    },
                    "start": 1284,
                    "end": 1291
                  },
                  "start": 1257,
                  "end": 1291
                },
                "start": 1255,
                "end": 1291
              },
              "start": 1251,
              "end": 1291
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
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
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
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1302,
                                      "end": 1303
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1302,
                                      "end": 1303
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1302,
                                    "end": 1303
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1300,
                                "end": 1305
                              },
                              "right": {
                                "type": "ObjectExpression",
                                "properties": [],
                                "start": 1308,
                                "end": 1310
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1300,
                              "end": 1310
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1299,
                          "end": 1311
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 1296,
                        "end": 1311
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1295,
                    "end": 1312
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 1315,
                    "end": 1317
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1295,
                  "end": 1317
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1337,
                              "end": 1343
                            },
                            "start": 1335,
                            "end": 1343
                          },
                          "start": 1334,
                          "end": 1343
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1346,
                          "end": 1347
                        },
                        "definite": false,
                        "start": 1334,
                        "end": 1347
                      }
                    ],
                    "declare": false,
                    "start": 1328,
                    "end": 1348
                  }
                ],
                "start": 1322,
                "end": 1350
              },
              "id": null,
              "generator": false,
              "start": 1294,
              "end": 1350
            },
            "definite": false,
            "start": 1251,
            "end": 1350
          }
        ],
        "declare": false,
        "start": 1245,
        "end": 1351
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1238,
      "end": 1351
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 1451,
        "end": 1456
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 1463,
              "end": 1468
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1473,
                      "end": 1474
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1477,
                        "end": 1483
                      },
                      "start": 1475,
                      "end": 1483
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1473,
                    "end": 1484
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1485,
                      "end": 1486
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1489,
                        "end": 1495
                      },
                      "start": 1487,
                      "end": 1495
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1485,
                    "end": 1495
                  }
                ],
                "start": 1471,
                "end": 1497
              },
              "start": 1469,
              "end": 1497
            },
            "accessibility": null,
            "static": false,
            "start": 1463,
            "end": 1498
          }
        ],
        "start": 1457,
        "end": 1500
      },
      "declare": false,
      "start": 1441,
      "end": 1500
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "annotatedNested",
          "optional": false,
          "typeAnnotation": null,
          "start": 1518,
          "end": 1533
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inner",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1536,
                  "end": 1541
                },
                "value": {
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1545,
                          "end": 1546
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1545,
                            "end": 1546
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1549,
                            "end": 1550
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1545,
                          "end": 1550
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1545,
                        "end": 1550
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1552,
                          "end": 1553
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1552,
                          "end": 1553
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1552,
                        "end": 1553
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1543,
                    "end": 1555
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 1558,
                    "end": 1560
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1543,
                  "end": 1560
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1536,
                "end": 1560
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1564,
                  "end": 1569
                },
                "typeArguments": null,
                "start": 1564,
                "end": 1569
              },
              "start": 1562,
              "end": 1569
            },
            "start": 1534,
            "end": 1569
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1586,
                        "end": 1592
                      },
                      "start": 1584,
                      "end": 1592
                    },
                    "start": 1583,
                    "end": 1592
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1595,
                    "end": 1596
                  },
                  "definite": false,
                  "start": 1583,
                  "end": 1596
                }
              ],
              "declare": false,
              "start": 1577,
              "end": 1597
            }
          ],
          "start": 1571,
          "end": 1599
        },
        "expression": false,
        "start": 1509,
        "end": 1599
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1502,
      "end": 1599
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "annotatedNestedAlone",
          "optional": false,
          "typeAnnotation": null,
          "start": 1617,
          "end": 1637
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inner",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1640,
                  "end": 1645
                },
                "value": {
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1649,
                          "end": 1650
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1649,
                          "end": 1650
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1649,
                        "end": 1650
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1647,
                    "end": 1652
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 1655,
                    "end": 1657
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1647,
                  "end": 1657
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1640,
                "end": 1657
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1661,
                  "end": 1666
                },
                "typeArguments": null,
                "start": 1661,
                "end": 1666
              },
              "start": 1659,
              "end": 1666
            },
            "start": 1638,
            "end": 1666
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1683,
                        "end": 1689
                      },
                      "start": 1681,
                      "end": 1689
                    },
                    "start": 1680,
                    "end": 1689
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1692,
                    "end": 1693
                  },
                  "definite": false,
                  "start": 1680,
                  "end": 1693
                }
              ],
              "declare": false,
              "start": 1674,
              "end": 1694
            }
          ],
          "start": 1668,
          "end": 1696
        },
        "expression": false,
        "start": 1608,
        "end": 1696
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1601,
      "end": 1696
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1721,
                        "end": 1727
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "summary",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1732,
                                "end": 1739
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1741,
                                  "end": 1747
                                },
                                "start": 1739,
                                "end": 1747
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1732,
                              "end": 1747
                            }
                          ],
                          "start": 1730,
                          "end": 1749
                        },
                        "start": 1728,
                        "end": 1749
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1721,
                      "end": 1749
                    }
                  ],
                  "start": 1719,
                  "end": 1751
                },
                "start": 1719,
                "end": 1753
              },
              "start": 1717,
              "end": 1753
            },
            "start": 1712,
            "end": 1753
          },
          "init": null,
          "definite": false,
          "start": 1712,
          "end": 1753
        }
      ],
      "declare": true,
      "start": 1698,
      "end": 1754
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 1755,
            "end": 1760
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 1761,
            "end": 1764
          },
          "optional": false,
          "computed": false,
          "start": 1755,
          "end": 1764
        },
        "typeArguments": null,
        "arguments": [
          {
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1768,
                      "end": 1774
                    },
                    "value": {
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
                              "name": "summary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1778,
                              "end": 1785
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "summary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1778,
                              "end": 1785
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1778,
                            "end": 1785
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1776,
                        "end": 1787
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 1790,
                        "end": 1792
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1776,
                      "end": 1792
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1768,
                    "end": 1792
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1766,
                "end": 1794
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1814,
                            "end": 1820
                          },
                          "start": 1812,
                          "end": 1820
                        },
                        "start": 1811,
                        "end": 1820
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "summary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1823,
                        "end": 1830
                      },
                      "definite": false,
                      "start": 1811,
                      "end": 1830
                    }
                  ],
                  "declare": false,
                  "start": 1805,
                  "end": 1831
                }
              ],
              "start": 1799,
              "end": 1833
            },
            "id": null,
            "generator": false,
            "start": 1765,
            "end": 1833
          }
        ],
        "optional": false,
        "start": 1755,
        "end": 1834
      },
      "directive": null,
      "start": 1755,
      "end": 1835
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 1854,
        "end": 1861
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1880,
                      "end": 1883
                    },
                    "start": 1878,
                    "end": 1883
                  },
                  "start": 1873,
                  "end": 1883
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1888,
                  "end": 1892
                },
                "start": 1885,
                "end": 1892
              },
              "start": 1872,
              "end": 1892
            },
            "start": 1870,
            "end": 1892
          },
          "start": 1862,
          "end": 1892
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1895,
          "end": 1899
        },
        "start": 1893,
        "end": 1899
      },
      "body": null,
      "expression": false,
      "start": 1837,
      "end": 1900
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeAny",
          "optional": false,
          "typeAnnotation": null,
          "start": 1901,
          "end": 1908
        },
        "typeArguments": null,
        "arguments": [
          {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1912,
                        "end": 1913
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1912,
                        "end": 1913
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1912,
                      "end": 1913
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1910,
                  "end": 1915
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1918,
                  "end": 1920
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1910,
                "end": 1920
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1925,
              "end": 1927
            },
            "id": null,
            "generator": false,
            "start": 1909,
            "end": 1927
          }
        ],
        "optional": false,
        "start": 1901,
        "end": 1928
      },
      "directive": null,
      "start": 1901,
      "end": 1929
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
              "name": "partial",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "known",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1964,
                                "end": 1969
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1972,
                                  "end": 1978
                                },
                                "start": 1970,
                                "end": 1978
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1964,
                              "end": 1978
                            }
                          ],
                          "start": 1962,
                          "end": 1980
                        },
                        "start": 1960,
                        "end": 1980
                      },
                      "start": 1954,
                      "end": 1980
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1985,
                      "end": 1989
                    },
                    "start": 1982,
                    "end": 1989
                  },
                  "start": 1953,
                  "end": 1989
                },
                "start": 1951,
                "end": 1989
              },
              "start": 1944,
              "end": 1989
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
                          "name": "known",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1995,
                          "end": 2000
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "known",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1995,
                          "end": 2000
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1995,
                        "end": 2000
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "unknown",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2002,
                          "end": 2009
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "unknown",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2002,
                          "end": 2009
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 2002,
                        "end": 2009
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1993,
                    "end": 2011
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 2014,
                    "end": 2016
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1993,
                  "end": 2016
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2036,
                              "end": 2042
                            },
                            "start": 2034,
                            "end": 2042
                          },
                          "start": 2033,
                          "end": 2042
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "known",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2045,
                          "end": 2050
                        },
                        "definite": false,
                        "start": 2033,
                        "end": 2050
                      }
                    ],
                    "declare": false,
                    "start": 2027,
                    "end": 2051
                  }
                ],
                "start": 2021,
                "end": 2053
              },
              "id": null,
              "generator": false,
              "start": 1992,
              "end": 2053
            },
            "definite": false,
            "start": 1944,
            "end": 2053
          }
        ],
        "declare": false,
        "start": 1938,
        "end": 2054
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1931,
      "end": 2054
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
              "name": "nonOptional",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2092,
                                "end": 2093
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2096,
                                  "end": 2102
                                },
                                "start": 2094,
                                "end": 2102
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 2092,
                              "end": 2103
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2104,
                                "end": 2105
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 2108,
                                  "end": 2114
                                },
                                "start": 2106,
                                "end": 2114
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 2104,
                              "end": 2114
                            }
                          ],
                          "start": 2090,
                          "end": 2116
                        },
                        "start": 2088,
                        "end": 2116
                      },
                      "start": 2083,
                      "end": 2116
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 2121,
                      "end": 2125
                    },
                    "start": 2118,
                    "end": 2125
                  },
                  "start": 2082,
                  "end": 2125
                },
                "start": 2080,
                "end": 2125
              },
              "start": 2069,
              "end": 2125
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2131,
                          "end": 2132
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2131,
                          "end": 2132
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 2131,
                        "end": 2132
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2134,
                          "end": 2135
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2134,
                          "end": 2135
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 2134,
                        "end": 2135
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2129,
                    "end": 2137
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 2140,
                    "end": 2142
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2129,
                  "end": 2142
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2162,
                              "end": 2168
                            },
                            "start": 2160,
                            "end": 2168
                          },
                          "start": 2159,
                          "end": 2168
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2171,
                          "end": 2172
                        },
                        "definite": false,
                        "start": 2159,
                        "end": 2172
                      }
                    ],
                    "declare": false,
                    "start": 2153,
                    "end": 2173
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2187,
                              "end": 2193
                            },
                            "start": 2185,
                            "end": 2193
                          },
                          "start": 2184,
                          "end": 2193
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2196,
                          "end": 2197
                        },
                        "definite": false,
                        "start": 2184,
                        "end": 2197
                      }
                    ],
                    "declare": false,
                    "start": 2178,
                    "end": 2198
                  }
                ],
                "start": 2147,
                "end": 2200
              },
              "id": null,
              "generator": false,
              "start": 2128,
              "end": 2200
            },
            "definite": false,
            "start": 2069,
            "end": 2200
          }
        ],
        "declare": false,
        "start": 2063,
        "end": 2201
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2056,
      "end": 2201
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 2220,
        "end": 2230
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2252,
                            "end": 2253
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2256,
                              "end": 2262
                            },
                            "start": 2254,
                            "end": 2262
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2252,
                          "end": 2263
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2264,
                            "end": 2265
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2268,
                              "end": 2274
                            },
                            "start": 2266,
                            "end": 2274
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2264,
                          "end": 2274
                        }
                      ],
                      "start": 2250,
                      "end": 2276
                    },
                    "start": 2248,
                    "end": 2276
                  },
                  "start": 2242,
                  "end": 2276
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2281,
                  "end": 2285
                },
                "start": 2278,
                "end": 2285
              },
              "start": 2241,
              "end": 2285
            },
            "start": 2239,
            "end": 2285
          },
          "start": 2231,
          "end": 2285
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2288,
          "end": 2292
        },
        "start": 2286,
        "end": 2292
      },
      "body": null,
      "expression": false,
      "start": 2203,
      "end": 2293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 2294,
          "end": 2304
        },
        "typeArguments": null,
        "arguments": [
          {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2308,
                        "end": 2309
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2308,
                        "end": 2309
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2308,
                      "end": 2309
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2311,
                        "end": 2312
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2311,
                        "end": 2312
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2311,
                      "end": 2312
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2306,
                  "end": 2314
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 2317,
                  "end": 2319
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 2306,
                "end": 2319
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2339,
                            "end": 2345
                          },
                          "start": 2337,
                          "end": 2345
                        },
                        "start": 2336,
                        "end": 2345
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2348,
                        "end": 2349
                      },
                      "definite": false,
                      "start": 2336,
                      "end": 2349
                    }
                  ],
                  "declare": false,
                  "start": 2330,
                  "end": 2350
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2364,
                            "end": 2370
                          },
                          "start": 2362,
                          "end": 2370
                        },
                        "start": 2361,
                        "end": 2370
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2373,
                        "end": 2374
                      },
                      "definite": false,
                      "start": 2361,
                      "end": 2374
                    }
                  ],
                  "declare": false,
                  "start": 2355,
                  "end": 2375
                }
              ],
              "start": 2324,
              "end": 2377
            },
            "id": null,
            "generator": false,
            "start": 2305,
            "end": 2377
          }
        ],
        "optional": false,
        "start": 2294,
        "end": 2378
      },
      "directive": null,
      "start": 2294,
      "end": 2379
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Driver",
        "optional": false,
        "typeAnnotation": null,
        "start": 2391,
        "end": 2397
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "rm",
              "optional": false,
              "typeAnnotation": null,
              "start": 2404,
              "end": 2406
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2413,
                    "end": 2419
                  },
                  "start": 2411,
                  "end": 2419
                },
                "start": 2407,
                "end": 2419
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "recursive",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2433,
                          "end": 2442
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2445,
                            "end": 2452
                          },
                          "start": 2443,
                          "end": 2452
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2433,
                        "end": 2453
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "force",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2454,
                          "end": 2459
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2462,
                            "end": 2469
                          },
                          "start": 2460,
                          "end": 2469
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2454,
                        "end": 2469
                      }
                    ],
                    "start": 2431,
                    "end": 2471
                  },
                  "start": 2429,
                  "end": 2471
                },
                "start": 2421,
                "end": 2471
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2474,
                "end": 2478
              },
              "start": 2472,
              "end": 2478
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2404,
            "end": 2479
          }
        ],
        "start": 2398,
        "end": 2481
      },
      "declare": false,
      "start": 2381,
      "end": 2481
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
              "name": "driver",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Driver",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2503,
                    "end": 2509
                  },
                  "typeArguments": null,
                  "start": 2503,
                  "end": 2509
                },
                "start": 2501,
                "end": 2509
              },
              "start": 2495,
              "end": 2509
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
                    "name": "rm",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2518,
                    "end": 2520
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2523,
                        "end": 2527
                      },
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
                                "name": "recursive",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2531,
                                "end": 2540
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "recursive",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2531,
                                "end": 2540
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 2531,
                              "end": 2540
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "force",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2542,
                                "end": 2547
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "force",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2542,
                                "end": 2547
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 2542,
                              "end": 2547
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2529,
                          "end": 2549
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 2552,
                          "end": 2554
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2529,
                        "end": 2554
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
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
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2578,
                                    "end": 2584
                                  },
                                  "start": 2576,
                                  "end": 2584
                                },
                                "start": 2575,
                                "end": 2584
                              },
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "recursive",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2587,
                                "end": 2596
                              },
                              "definite": false,
                              "start": 2575,
                              "end": 2596
                            }
                          ],
                          "declare": false,
                          "start": 2569,
                          "end": 2597
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "const",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2615,
                                    "end": 2621
                                  },
                                  "start": 2613,
                                  "end": 2621
                                },
                                "start": 2612,
                                "end": 2621
                              },
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "force",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2624,
                                "end": 2629
                              },
                              "definite": false,
                              "start": 2612,
                              "end": 2629
                            }
                          ],
                          "declare": false,
                          "start": 2606,
                          "end": 2630
                        }
                      ],
                      "start": 2559,
                      "end": 2636
                    },
                    "id": null,
                    "generator": false,
                    "start": 2522,
                    "end": 2636
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2518,
                  "end": 2636
                }
              ],
              "start": 2512,
              "end": 2639
            },
            "definite": false,
            "start": 2495,
            "end": 2639
          }
        ],
        "declare": false,
        "start": 2489,
        "end": 2640
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2482,
      "end": 2640
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
              "name": "contextualNested",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2684,
                                "end": 2689
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "computed": false,
                                      "optional": true,
                                      "readonly": false,
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2694,
                                        "end": 2695
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 2698,
                                          "end": 2704
                                        },
                                        "start": 2696,
                                        "end": 2704
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 2694,
                                      "end": 2704
                                    }
                                  ],
                                  "start": 2692,
                                  "end": 2706
                                },
                                "start": 2690,
                                "end": 2706
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 2684,
                              "end": 2706
                            }
                          ],
                          "start": 2682,
                          "end": 2708
                        },
                        "start": 2680,
                        "end": 2708
                      },
                      "start": 2674,
                      "end": 2708
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 2713,
                      "end": 2717
                    },
                    "start": 2710,
                    "end": 2717
                  },
                  "start": 2673,
                  "end": 2717
                },
                "start": 2671,
                "end": 2717
              },
              "start": 2655,
              "end": 2717
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
                          "name": "inner",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2723,
                          "end": 2728
                        },
                        "value": {
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2732,
                                  "end": 2733
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2732,
                                  "end": 2733
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 2732,
                                "end": 2733
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2730,
                            "end": 2735
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 2738,
                            "end": 2740
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2730,
                          "end": 2740
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2723,
                        "end": 2740
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2721,
                    "end": 2742
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 2745,
                    "end": 2747
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2721,
                  "end": 2747
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2767,
                              "end": 2773
                            },
                            "start": 2765,
                            "end": 2773
                          },
                          "start": 2764,
                          "end": 2773
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2776,
                          "end": 2777
                        },
                        "definite": false,
                        "start": 2764,
                        "end": 2777
                      }
                    ],
                    "declare": false,
                    "start": 2758,
                    "end": 2778
                  }
                ],
                "start": 2752,
                "end": 2780
              },
              "id": null,
              "generator": false,
              "start": 2720,
              "end": 2780
            },
            "definite": false,
            "start": 2655,
            "end": 2780
          }
        ],
        "declare": false,
        "start": 2649,
        "end": 2781
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2642,
      "end": 2781
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "annotatedNestedWithDefault",
          "optional": false,
          "typeAnnotation": null,
          "start": 2799,
          "end": 2825
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2828,
                    "end": 2833
                  },
                  "value": {
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2837,
                            "end": 2838
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2837,
                            "end": 2838
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 2837,
                          "end": 2838
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2835,
                      "end": 2840
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 2843,
                      "end": 2845
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2835,
                    "end": 2845
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2828,
                  "end": 2845
                }
              ],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Outer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2849,
                    "end": 2854
                  },
                  "typeArguments": null,
                  "start": 2849,
                  "end": 2854
                },
                "start": 2847,
                "end": 2854
              },
              "start": 2826,
              "end": 2854
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 2857,
              "end": 2859
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2826,
            "end": 2859
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2876,
                        "end": 2882
                      },
                      "start": 2874,
                      "end": 2882
                    },
                    "start": 2873,
                    "end": 2882
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2885,
                    "end": 2886
                  },
                  "definite": false,
                  "start": 2873,
                  "end": 2886
                }
              ],
              "declare": false,
              "start": 2867,
              "end": 2887
            }
          ],
          "start": 2861,
          "end": 2889
        },
        "expression": false,
        "start": 2790,
        "end": 2889
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2783,
      "end": 2889
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "annotatedWithDefault",
          "optional": false,
          "typeAnnotation": null,
          "start": 2907,
          "end": 2927
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2930,
                    "end": 2931
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2930,
                    "end": 2931
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 2930,
                  "end": 2931
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2933,
                    "end": 2934
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2933,
                    "end": 2934
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 2933,
                  "end": 2934
                }
              ],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2940,
                        "end": 2941
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2944,
                          "end": 2950
                        },
                        "start": 2942,
                        "end": 2950
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2940,
                      "end": 2951
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2952,
                        "end": 2953
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2956,
                          "end": 2962
                        },
                        "start": 2954,
                        "end": 2962
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2952,
                      "end": 2962
                    }
                  ],
                  "start": 2938,
                  "end": 2964
                },
                "start": 2936,
                "end": 2964
              },
              "start": 2928,
              "end": 2964
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 2967,
              "end": 2969
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 2928,
            "end": 2969
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2986,
                        "end": 2992
                      },
                      "start": 2984,
                      "end": 2992
                    },
                    "start": 2983,
                    "end": 2992
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2995,
                    "end": 2996
                  },
                  "definite": false,
                  "start": 2983,
                  "end": 2996
                }
              ],
              "declare": false,
              "start": 2977,
              "end": 2997
            }
          ],
          "start": 2971,
          "end": 2999
        },
        "expression": false,
        "start": 2898,
        "end": 2999
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2891,
      "end": 2999
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OuterArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 3011,
        "end": 3021
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 3028,
              "end": 3033
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 3036,
                  "end": 3042
                },
                "start": 3036,
                "end": 3044
              },
              "start": 3034,
              "end": 3044
            },
            "accessibility": null,
            "static": false,
            "start": 3028,
            "end": 3045
          }
        ],
        "start": 3022,
        "end": 3047
      },
      "declare": false,
      "start": 3001,
      "end": 3047
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "annotatedNestedArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 3065,
          "end": 3085
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inner",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3088,
                  "end": 3093
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3096,
                          "end": 3097
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 3100,
                          "end": 3101
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3096,
                        "end": 3101
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3103,
                        "end": 3104
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3095,
                    "end": 3105
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 3108,
                    "end": 3110
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3095,
                  "end": 3110
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3088,
                "end": 3110
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OuterArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3114,
                  "end": 3124
                },
                "typeArguments": null,
                "start": 3114,
                "end": 3124
              },
              "start": 3112,
              "end": 3124
            },
            "start": 3086,
            "end": 3124
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3141,
                        "end": 3147
                      },
                      "start": 3139,
                      "end": 3147
                    },
                    "start": 3138,
                    "end": 3147
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3150,
                    "end": 3151
                  },
                  "definite": false,
                  "start": 3138,
                  "end": 3151
                }
              ],
              "declare": false,
              "start": 3132,
              "end": 3152
            }
          ],
          "start": 3126,
          "end": 3154
        },
        "expression": false,
        "start": 3056,
        "end": 3154
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3049,
      "end": 3154
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
              "name": "indexSignature",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSIndexSignature",
                              "parameters": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 3202,
                                      "end": 3208
                                    },
                                    "start": 3200,
                                    "end": 3208
                                  },
                                  "start": 3197,
                                  "end": 3208
                                }
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3211,
                                  "end": 3217
                                },
                                "start": 3209,
                                "end": 3217
                              },
                              "readonly": false,
                              "static": false,
                              "accessibility": null,
                              "start": 3196,
                              "end": 3217
                            }
                          ],
                          "start": 3194,
                          "end": 3219
                        },
                        "start": 3192,
                        "end": 3219
                      },
                      "start": 3186,
                      "end": 3219
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 3224,
                      "end": 3228
                    },
                    "start": 3221,
                    "end": 3228
                  },
                  "start": 3185,
                  "end": 3228
                },
                "start": 3183,
                "end": 3228
              },
              "start": 3169,
              "end": 3228
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3234,
                          "end": 3235
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3234,
                          "end": 3235
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3234,
                        "end": 3235
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3232,
                    "end": 3237
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3240,
                    "end": 3242
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3232,
                  "end": 3242
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3262,
                              "end": 3268
                            },
                            "start": 3260,
                            "end": 3268
                          },
                          "start": 3259,
                          "end": 3268
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3271,
                          "end": 3272
                        },
                        "definite": false,
                        "start": 3259,
                        "end": 3272
                      }
                    ],
                    "declare": false,
                    "start": 3253,
                    "end": 3273
                  }
                ],
                "start": 3247,
                "end": 3275
              },
              "id": null,
              "generator": false,
              "start": 3231,
              "end": 3275
            },
            "definite": false,
            "start": 3169,
            "end": 3275
          }
        ],
        "declare": false,
        "start": 3163,
        "end": 3276
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3156,
      "end": 3276
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
              "name": "nestedAny",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 3311,
                          "end": 3314
                        },
                        "start": 3309,
                        "end": 3314
                      },
                      "start": 3303,
                      "end": 3314
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 3319,
                      "end": 3323
                    },
                    "start": 3316,
                    "end": 3323
                  },
                  "start": 3302,
                  "end": 3323
                },
                "start": 3300,
                "end": 3323
              },
              "start": 3291,
              "end": 3323
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3329,
                          "end": 3330
                        },
                        "value": {
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
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3334,
                                  "end": 3335
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3334,
                                  "end": 3335
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 3334,
                                "end": 3335
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3332,
                            "end": 3337
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 3340,
                            "end": 3342
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3332,
                          "end": 3342
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 3329,
                        "end": 3342
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3327,
                    "end": 3344
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3347,
                    "end": 3349
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3327,
                  "end": 3349
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3360,
                      "end": 3361
                    },
                    "directive": null,
                    "start": 3360,
                    "end": 3362
                  }
                ],
                "start": 3354,
                "end": 3364
              },
              "id": null,
              "generator": false,
              "start": 3326,
              "end": 3364
            },
            "definite": false,
            "start": 3291,
            "end": 3364
          }
        ],
        "declare": false,
        "start": 3285,
        "end": 3365
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3278,
      "end": 3365
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 3384,
        "end": 3391
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3392,
              "end": 3393
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3392,
            "end": 3393
          }
        ],
        "start": 3391,
        "end": 3394
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3402,
                "end": 3403
              },
              "typeArguments": null,
              "start": 3402,
              "end": 3403
            },
            "start": 3400,
            "end": 3403
          },
          "start": 3395,
          "end": 3403
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3424,
                        "end": 3431
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3432,
                              "end": 3433
                            },
                            "typeArguments": null,
                            "start": 3432,
                            "end": 3433
                          }
                        ],
                        "start": 3431,
                        "end": 3434
                      },
                      "start": 3424,
                      "end": 3434
                    },
                    "start": 3422,
                    "end": 3434
                  },
                  "start": 3416,
                  "end": 3434
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3439,
                  "end": 3443
                },
                "start": 3436,
                "end": 3443
              },
              "start": 3415,
              "end": 3443
            },
            "start": 3413,
            "end": 3443
          },
          "start": 3405,
          "end": 3443
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3446,
          "end": 3450
        },
        "start": 3444,
        "end": 3450
      },
      "body": null,
      "expression": false,
      "start": 3367,
      "end": 3451
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null,
          "start": 3452,
          "end": 3459
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3462,
                  "end": 3463
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3465,
                  "end": 3466
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3462,
                "end": 3466
              }
            ],
            "start": 3460,
            "end": 3468
          },
          {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3473,
                        "end": 3474
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3473,
                        "end": 3474
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 3473,
                      "end": 3474
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3471,
                  "end": 3476
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 3479,
                  "end": 3481
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 3471,
                "end": 3481
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3501,
                            "end": 3507
                          },
                          "start": 3499,
                          "end": 3507
                        },
                        "start": 3498,
                        "end": 3507
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3510,
                        "end": 3511
                      },
                      "definite": false,
                      "start": 3498,
                      "end": 3511
                    }
                  ],
                  "declare": false,
                  "start": 3492,
                  "end": 3512
                }
              ],
              "start": 3486,
              "end": 3514
            },
            "id": null,
            "generator": false,
            "start": 3470,
            "end": 3514
          }
        ],
        "optional": false,
        "start": 3452,
        "end": 3515
      },
      "directive": null,
      "start": 3452,
      "end": 3516
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
              "name": "nonEmptyDefault",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3558,
                                "end": 3559
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 3561,
                                  "end": 3568
                                },
                                "start": 3559,
                                "end": 3568
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3558,
                              "end": 3569
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3570,
                                "end": 3571
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3574,
                                  "end": 3580
                                },
                                "start": 3572,
                                "end": 3580
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3570,
                              "end": 3580
                            }
                          ],
                          "start": 3556,
                          "end": 3582
                        },
                        "start": 3554,
                        "end": 3582
                      },
                      "start": 3549,
                      "end": 3582
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 3587,
                      "end": 3591
                    },
                    "start": 3584,
                    "end": 3591
                  },
                  "start": 3548,
                  "end": 3591
                },
                "start": 3546,
                "end": 3591
              },
              "start": 3531,
              "end": 3591
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3597,
                          "end": 3598
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3597,
                          "end": 3598
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3597,
                        "end": 3598
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3600,
                          "end": 3601
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3600,
                          "end": 3601
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3600,
                        "end": 3601
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3595,
                    "end": 3603
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3608,
                          "end": 3609
                        },
                        "value": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 3611,
                          "end": 3616
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 3608,
                        "end": 3616
                      }
                    ],
                    "start": 3606,
                    "end": 3618
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3595,
                  "end": 3618
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3638,
                              "end": 3644
                            },
                            "start": 3636,
                            "end": 3644
                          },
                          "start": 3635,
                          "end": 3644
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3647,
                          "end": 3648
                        },
                        "definite": false,
                        "start": 3635,
                        "end": 3648
                      }
                    ],
                    "declare": false,
                    "start": 3629,
                    "end": 3649
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3663,
                              "end": 3669
                            },
                            "start": 3661,
                            "end": 3669
                          },
                          "start": 3660,
                          "end": 3669
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3672,
                          "end": 3673
                        },
                        "definite": false,
                        "start": 3660,
                        "end": 3673
                      }
                    ],
                    "declare": false,
                    "start": 3654,
                    "end": 3674
                  }
                ],
                "start": 3623,
                "end": 3676
              },
              "id": null,
              "generator": false,
              "start": 3594,
              "end": 3676
            },
            "definite": false,
            "start": 3531,
            "end": 3676
          }
        ],
        "declare": false,
        "start": 3525,
        "end": 3677
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3518,
      "end": 3677
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
              "name": "mapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 3692,
              "end": 3698
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3711,
                              "end": 3712
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3715,
                                "end": 3721
                              },
                              "start": 3713,
                              "end": 3721
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3711,
                            "end": 3722
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3723,
                              "end": 3724
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 3727,
                                "end": 3733
                              },
                              "start": 3725,
                              "end": 3733
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3723,
                            "end": 3733
                          }
                        ],
                        "start": 3709,
                        "end": 3735
                      },
                      "start": 3709,
                      "end": 3737
                    },
                    "start": 3707,
                    "end": 3737
                  },
                  "start": 3702,
                  "end": 3737
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3746,
                    "end": 3751
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3752,
                    "end": 3755
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3746,
                  "end": 3755
                },
                "typeArguments": null,
                "arguments": [
                  {
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3759,
                                "end": 3760
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3759,
                                "end": 3760
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 3759,
                              "end": 3760
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3762,
                                "end": 3763
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3762,
                                "end": 3763
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 3762,
                              "end": 3763
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3757,
                          "end": 3765
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 3768,
                          "end": 3770
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3757,
                        "end": 3770
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
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
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3794,
                                    "end": 3800
                                  },
                                  "start": 3792,
                                  "end": 3800
                                },
                                "start": 3791,
                                "end": 3800
                              },
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3803,
                                "end": 3804
                              },
                              "definite": false,
                              "start": 3791,
                              "end": 3804
                            }
                          ],
                          "declare": false,
                          "start": 3785,
                          "end": 3805
                        },
                        {
                          "type": "VariableDeclaration",
                          "kind": "const",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 3823,
                                    "end": 3829
                                  },
                                  "start": 3821,
                                  "end": 3829
                                },
                                "start": 3820,
                                "end": 3829
                              },
                              "init": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3832,
                                "end": 3833
                              },
                              "definite": false,
                              "start": 3820,
                              "end": 3833
                            }
                          ],
                          "declare": false,
                          "start": 3814,
                          "end": 3834
                        }
                      ],
                      "start": 3775,
                      "end": 3840
                    },
                    "id": null,
                    "generator": false,
                    "start": 3756,
                    "end": 3840
                  }
                ],
                "optional": false,
                "start": 3746,
                "end": 3841
              },
              "id": null,
              "generator": false,
              "start": 3701,
              "end": 3841
            },
            "definite": false,
            "start": 3692,
            "end": 3841
          }
        ],
        "declare": false,
        "start": 3686,
        "end": 3842
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3679,
      "end": 3842
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
              "name": "mixedDefaults",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 3879,
                            "end": 3885
                          },
                          "start": 3879,
                          "end": 3887
                        },
                        "start": 3877,
                        "end": 3887
                      },
                      "start": 3873,
                      "end": 3887
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "input",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3899,
                                "end": 3900
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3903,
                                  "end": 3909
                                },
                                "start": 3901,
                                "end": 3909
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3899,
                              "end": 3910
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": true,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3911,
                                "end": 3912
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3915,
                                  "end": 3921
                                },
                                "start": 3913,
                                "end": 3921
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3911,
                              "end": 3921
                            }
                          ],
                          "start": 3897,
                          "end": 3923
                        },
                        "start": 3895,
                        "end": 3923
                      },
                      "start": 3889,
                      "end": 3923
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 3928,
                      "end": 3932
                    },
                    "start": 3925,
                    "end": 3932
                  },
                  "start": 3872,
                  "end": 3932
                },
                "start": 3870,
                "end": 3932
              },
              "start": 3857,
              "end": 3932
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3936,
                  "end": 3940
                },
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3944,
                          "end": 3945
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3944,
                          "end": 3945
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3944,
                        "end": 3945
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3947,
                          "end": 3948
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
                            "start": 3947,
                            "end": 3948
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 3951,
                            "end": 3952
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3947,
                          "end": 3952
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3947,
                        "end": 3952
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3942,
                    "end": 3954
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3957,
                    "end": 3959
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3942,
                  "end": 3959
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3979,
                              "end": 3985
                            },
                            "start": 3977,
                            "end": 3985
                          },
                          "start": 3976,
                          "end": 3985
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3988,
                          "end": 3989
                        },
                        "definite": false,
                        "start": 3976,
                        "end": 3989
                      }
                    ],
                    "declare": false,
                    "start": 3970,
                    "end": 3990
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 4004,
                              "end": 4010
                            },
                            "start": 4002,
                            "end": 4010
                          },
                          "start": 4001,
                          "end": 4010
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4013,
                          "end": 4014
                        },
                        "definite": false,
                        "start": 4001,
                        "end": 4014
                      }
                    ],
                    "declare": false,
                    "start": 3995,
                    "end": 4015
                  }
                ],
                "start": 3964,
                "end": 4017
              },
              "id": null,
              "generator": false,
              "start": 3935,
              "end": 4017
            },
            "definite": false,
            "start": 3857,
            "end": 4017
          }
        ],
        "declare": false,
        "start": 3851,
        "end": 4018
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3844,
      "end": 4018
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4019
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
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 637,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 642,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 649,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 663,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 685,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 696,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 703,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 709,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 715,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 737,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 743,
    "end": 744
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 757,
    "end": 759
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 765,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "Arr",
    "start": 770,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 777,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 786,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 795,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 805,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 816,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 823,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "arr1",
    "start": 829,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "Arr",
    "start": 835,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 855,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 861,
    "end": 862
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 875,
    "end": 877
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 883,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 890,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "arr2",
    "start": 896,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 903,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 920,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 930,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 933,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 956,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 962,
    "end": 963
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 976,
    "end": 978
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 984,
    "end": 991
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 992,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "takeArr",
    "start": 1001,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1009,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "Arr",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1025,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "takeArr",
    "start": 1031,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1053,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1062,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1071,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1087,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1096,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1112,
    "end": 1118
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1127,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1134,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "arr3",
    "start": 1140,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1147,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1162,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1174,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1177,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1204,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1213,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1222,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1238,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1245,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "arr4",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1258,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1284,
    "end": 1286
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1287,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1319,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1328,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1337,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1441,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 1451,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 1463,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1477,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1489,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1502,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1509,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "annotatedNested",
    "start": 1518,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 1536,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 1564,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1577,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1586,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1601,
    "end": 1607
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1608,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "annotatedNestedAlone",
    "start": 1617,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 1640,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 1661,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1674,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1683,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1698,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1706,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1712,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1721,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "summary",
    "start": 1732,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1741,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1755,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1761,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1768,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "summary",
    "start": 1778,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1796,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1805,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1814,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "summary",
    "start": 1823,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1837,
    "end": 1844
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1845,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "takeAny",
    "start": 1854,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1862,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1873,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1880,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1885,
    "end": 1887
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1888,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1895,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "takeAny",
    "start": 1901,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1922,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1931,
    "end": 1937
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1938,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "partial",
    "start": 1944,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1954,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "known",
    "start": 1964,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1972,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1982,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1985,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "known",
    "start": 1995,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2002,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2018,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2027,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2036,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "known",
    "start": 2045,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2056,
    "end": 2062
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2063,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "nonOptional",
    "start": 2069,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 2083,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2096,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2108,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2118,
    "end": 2120
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2121,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2144,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2153,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2162,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2178,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2187,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2203,
    "end": 2210
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2211,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "takeObject",
    "start": 2220,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2231,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 2242,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2256,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2268,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2278,
    "end": 2280
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2281,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2288,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "takeObject",
    "start": 2294,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2321,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2330,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2339,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2355,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2364,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2381,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "Driver",
    "start": 2391,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "rm",
    "start": 2404,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 2407,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2413,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 2421,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "recursive",
    "start": 2433,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2445,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "force",
    "start": 2454,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2462,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2474,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2482,
    "end": 2488
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2489,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "driver",
    "start": 2495,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "Driver",
    "start": 2503,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "rm",
    "start": 2518,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 2523,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "recursive",
    "start": 2531,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "force",
    "start": 2542,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2556,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2569,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2578,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "recursive",
    "start": 2587,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2606,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2615,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "force",
    "start": 2624,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2642,
    "end": 2648
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2649,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "contextualNested",
    "start": 2655,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 2674,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 2684,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2698,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2710,
    "end": 2712
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2713,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 2723,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2749,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2758,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2767,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2783,
    "end": 2789
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2790,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "annotatedNestedWithDefault",
    "start": 2799,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 2828,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 2849,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2867,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2876,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2891,
    "end": 2897
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2898,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "annotatedWithDefault",
    "start": 2907,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2944,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2956,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2977,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2986,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3001,
    "end": 3010
  },
  {
    "type": "Identifier",
    "value": "OuterArray",
    "start": 3011,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 3028,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3036,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3049,
    "end": 3055
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3056,
    "end": 3064
  },
  {
    "type": "Identifier",
    "value": "annotatedNestedArray",
    "start": 3065,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 3088,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "OuterArray",
    "start": 3114,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3132,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3141,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3156,
    "end": 3162
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3163,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "indexSignature",
    "start": 3169,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 3186,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3197,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3202,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3211,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3221,
    "end": 3223
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3224,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3244,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3253,
    "end": 3258
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3262,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3278,
    "end": 3284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3285,
    "end": 3290
  },
  {
    "type": "Identifier",
    "value": "nestedAny",
    "start": 3291,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 3303,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3311,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3316,
    "end": 3318
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3319,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3338,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3351,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3367,
    "end": 3374
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3375,
    "end": 3383
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 3384,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3395,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 3405,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 3416,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3424,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3436,
    "end": 3438
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3439,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3446,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 3452,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3483,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3492,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3501,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3518,
    "end": 3524
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3525,
    "end": 3530
  },
  {
    "type": "Identifier",
    "value": "nonEmptyDefault",
    "start": 3531,
    "end": 3546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 3549,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3561,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3574,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3584,
    "end": 3586
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3587,
    "end": 3591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3592,
    "end": 3593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3611,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3620,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3629,
    "end": 3634
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3638,
    "end": 3644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3654,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3663,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3679,
    "end": 3685
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3686,
    "end": 3691
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 3692,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 3702,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3715,
    "end": 3721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3723,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3725,
    "end": 3726
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3727,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3739,
    "end": 3741
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 3746,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3752,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3762,
    "end": 3763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3772,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3785,
    "end": 3790
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3794,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3804,
    "end": 3805
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3814,
    "end": 3819
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3821,
    "end": 3822
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3823,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3830,
    "end": 3831
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3832,
    "end": 3833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3839,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3844,
    "end": 3850
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3851,
    "end": 3856
  },
  {
    "type": "Identifier",
    "value": "mixedDefaults",
    "start": 3857,
    "end": 3870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3870,
    "end": 3871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3873,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3879,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3886,
    "end": 3887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 3889,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3895,
    "end": 3896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3897,
    "end": 3898
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3903,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3915,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3925,
    "end": 3927
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3928,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3936,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3947,
    "end": 3948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3953,
    "end": 3954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3961,
    "end": 3963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3970,
    "end": 3975
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3979,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3995,
    "end": 4000
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 4001,
    "end": 4002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4004,
    "end": 4010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4017,
    "end": 4018
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "jsdocNested",
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 132
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inner",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 140
                },
                "value": {
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 145
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 145
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 144,
                        "end": 145
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 147
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 150,
                    "end": 152
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 152
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 135,
                "end": 152
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 154
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 195
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 199
                  },
                  "definite": false,
                  "start": 194,
                  "end": 199
                }
              ],
              "declare": false,
              "start": 188,
              "end": 200
            }
          ],
          "start": 156,
          "end": 202
        },
        "expression": false,
        "start": 112,
        "end": 202
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 105,
      "end": 202
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "returnsContainer",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 392
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
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 424,
                      "end": 430
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": true,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 431,
                          "end": 432
                        },
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 436,
                                  "end": 437
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 436,
                                  "end": 437
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 436,
                                "end": 437
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 434,
                            "end": 439
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 442,
                            "end": 444
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 434,
                          "end": 444
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
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
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 500,
                                  "end": 501
                                },
                                "init": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 504,
                                  "end": 505
                                },
                                "definite": false,
                                "start": 500,
                                "end": 505
                              }
                            ],
                            "declare": false,
                            "start": 494,
                            "end": 506
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 527,
                                  "end": 528
                                }
                              ],
                              "start": 526,
                              "end": 529
                            },
                            "start": 519,
                            "end": 530
                          }
                        ],
                        "start": 446,
                        "end": 540
                      },
                      "expression": false,
                      "start": 430,
                      "end": 540
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 418,
                    "end": 540
                  }
                ],
                "start": 408,
                "end": 547
              },
              "start": 401,
              "end": 548
            }
          ],
          "start": 395,
          "end": 550
        },
        "expression": false,
        "start": 367,
        "end": 550
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 360,
      "end": 550
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
              "name": "cast",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 639
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 675
                },
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 679,
                          "end": 680
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 679,
                          "end": 680
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 679,
                        "end": 680
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 677,
                    "end": 682
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 685,
                    "end": 687
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 677,
                  "end": 687
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 730,
                          "end": 731
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 734,
                          "end": 735
                        },
                        "definite": false,
                        "start": 730,
                        "end": 735
                      }
                    ],
                    "declare": false,
                    "start": 724,
                    "end": 736
                  }
                ],
                "start": 692,
                "end": 738
              },
              "id": null,
              "generator": false,
              "start": 667,
              "end": 738
            },
            "definite": false,
            "start": 635,
            "end": 739
          }
        ],
        "declare": false,
        "start": 629,
        "end": 740
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 622,
      "end": 740
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 740
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 105,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "jsdocNested",
    "start": 121,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 188,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 360,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 367,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "returnsContainer",
    "start": 376,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 418,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 424,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 494,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 622,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 629,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "cast",
    "start": 635,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 667,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 724,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  }
]
```
